import Sequelize from 'sequelize';
import cfg from '../config/index.js';
const sequelize = new Sequelize(cfg.Mysql.database, cfg.Mysql.username, cfg.Mysql.password, {
    host: process.env['DB_HOST'], // 数据库地址
    dialect: 'mysql', // 数据库类型
    dialectOptions: { // 字符集
        charset: 'utf8mb4',
        supportBigNumbers: true,
        bigNumberStrings: true
    },
    "timezone": "+08:00",
    pool: {
        max: 5,
        min: 1,
        idle: 10000
    },
    logging: (log) => {
        console.log(1, log);
        return false;
    }
})
export default sequelize;