module.exports = {
    host: 'yogajagriti.com',
    user: 'jagritiyoga',
    password: 'Tech2020',
    database: 'jagritiyogadb',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};