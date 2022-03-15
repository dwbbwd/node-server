const { Sequelize } = require('sequelize');
import cfg from '../config/index.js';
const config = {
    username: cfg.Mysql.username,
    password: cfg.Mysql.password,
    database: cfg.Mysql.database,
    host: cfg.Mysql.host,
    dialect: cfg.Mysql.dialect,
    seederStorage: "sequelize",
    pool: {
        max: 10,
        min: 5,
        idle: 30000,
    },
    // 修复中国时区问题
    timezone: "+08:00",
    logging: (e) => {
        console.log(e);
    },
}
const sequelize = new Sequelize(config);

export default sequelize;