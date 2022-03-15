import Sequelize from 'sequelize';
import sequelize from '../db/index.js';
const User = sequelize.define(
    'users', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        comment: "id"
    },
    password: {
        type: Sequelize.STRING(20),
        allowNull: false,
        comment: "密码"
    },
    tel: {
        type: Sequelize.STRING(11),
        allowNull: false,
        comment: "手机号"
    },
    nicname: {
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "昵称"
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "邮箱"
    },
    img: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "头像"
    },
    name: {
        type: Sequelize.STRING(100),
        allowNull: false,
        comment: "真实姓名"
    },
    create_time: {
        type: Sequelize.DATE,
        allowNull: false,
        comment: "创建时间"
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: false,
    indexes: [{
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
            { name: "id" },
        ]
    },]
});
User.sync({
    force: false,
})

export default User;