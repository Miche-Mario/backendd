import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import session from "express-session";
import dotenv from "dotenv";
import db from "./config/Database.js"
import SequelizeStore from "connect-session-sequelize"
import UsersRoute from "./routes/UsersRoute.js"
import TauxRoute from "./routes/TauxRoute.js"
import DemandePretRoute from "./routes/DemandePretRoute.js"
import TransactionRoute from './routes/TransactionRoute.js'
import MessageTypeRoute from './routes/MessageType.js'
import MessagerieRoute from './routes/MessagerieRoute.js'
import AuthRoute from './routes/AuthRoute.js'
dotenv.config();

const app = express();


const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

(async()=> {
    await db.sync();
})()
app.use(cors({origin:true,credentials: true}));
app.use(express.json());
app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(UsersRoute);
app.use(TauxRoute);
app.use(DemandePretRoute);
app.use(TransactionRoute);
app.use(MessageTypeRoute);
app.use(MessagerieRoute);
app.use(AuthRoute)








// Static Images Folder
app.use('/Images', express.static('./Images'))


app.listen(process.env.PORT || 5000, () => {
    console.log('Server up and running...');
})