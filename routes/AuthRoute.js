import express from 'express'
import {Login, logOut, Me} from '../controllers/Auth.js'

const router = express.Router();

router.get('/me', Me).options(function(req,res,next){ 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); return res.send(200);

});
router.post('/login', Login).options(function(req,res,next){ 
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); return res.send(200);

});
router.delete('/logout', logOut);



export default router;