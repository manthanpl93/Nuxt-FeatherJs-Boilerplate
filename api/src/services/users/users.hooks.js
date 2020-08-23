const { authenticate } = require('@feathersjs/authentication').hooks
const {
  hashPassword,
  protect
} = require('@feathersjs/authentication-local').hooks
const UserModel = require('../../models/users.model')()
const bcrypt = require('bcryptjs')

async function verifyPassword (ctx) {
  const { query, user } = ctx.params
  try {
    if (query.type === 'verify-password') {
      const result = await UserModel.query().findById(user.user_id)
      const status = await bcrypt.compare(query.password, result.password)
      ctx.result = {
        status
      }
    }
  } catch (ex) {
    console.log(ex)
  }
  return ctx
}

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [verifyPassword],
    get: [],
    create: [hashPassword('password')],
    update: [hashPassword('password')],
    patch: [hashPassword('password')],
    remove: []
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect('password')
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
}
