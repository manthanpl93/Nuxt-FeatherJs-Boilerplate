// Update with your config settings.

module.exports = {
  development: {
    client: 'mysql',
    connection: 'mysql://root:root@localhost:3306/CarousalBeverages',
    migrations: {
      directory: '../migrations'
    }
  },
  production: {
    client: 'mysql',
    connection: 'mysql://root:root@localhost:3306/CarousalBeverages',
    migrations: {
      directory: '../migrations'
    }
  }
}
