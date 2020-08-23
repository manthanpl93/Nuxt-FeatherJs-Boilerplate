// Initializes the `profile` service on path `/profile`
const hooks = require('./profile.hooks')

module.exports = function (app) {
  const service = {
    find (params) {
      return Promise.resolve({ user: params.user })
    }
  }

  // Initialize our service with any options it requires
  app.use('/profile', service)

  // Get our initialized service so that we can register hooks
  app.service('profile').hooks(hooks)
}
