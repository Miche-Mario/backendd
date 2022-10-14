import { Sequelize } from "sequelize";


const db = new Sequelize('loan','root','Lostoflove90&', {
    host: 'localhost',
    dialect: "mysql"
});

export default db;