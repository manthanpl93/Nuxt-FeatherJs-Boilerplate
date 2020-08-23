// See https://vincit.github.io/objection.js/#models
// for more of what you can do here.
const { Model } = require('objection')

class users extends Model {
  static get tableName () {
    return 'users'
  }

  static get idColumn () {
    return 'user_id'
  }

  $beforeInsert () {
    this.createdAt = this.updatedAt = new Date()
  }

  $beforeUpdate () {
    this.updatedAt = new Date()
  }
}

module.exports = function (app) {
  return users
}
