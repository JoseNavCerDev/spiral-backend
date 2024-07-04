import { DataTypes, Sequelize } from 'sequelize';
import sequelize from '../ddbb/sequilize-settings.js';

const User = sequelize.define('User', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull:false
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING,
        unique: true,
        allowNull:false,
        isEmail: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }},
    {
        timestamps: false,
        createdAt: false,
        updatedAt:false 
    }
)

export default User;