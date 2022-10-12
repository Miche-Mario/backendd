import { Sequelize } from "sequelize";


const db = new Sequelize('db_a8e19e_loan','a8e19e_loan','Lostoflove90&', {
    host: 'mysql8001.site4now.net',
    dialect: "mysql"
});

export default db;