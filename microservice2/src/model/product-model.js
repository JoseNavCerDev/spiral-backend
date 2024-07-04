import { DataTypes } from 'sequelize';
import sequelize from '../ddbb/sequilize-settings.js';

const Product = sequelize.define('Product', {
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
    descripcion: {
        type: DataTypes.STRING,
        allowNull:false
    },
    cantidad: {
        type: DataTypes.INTEGER,
    },    
    color: {
        type: DataTypes.STRING,
        allowNull: true
    }},
    {
        timestamps: false,
        createdAt: false,
        updatedAt:false 
    }
)

export default Product;
