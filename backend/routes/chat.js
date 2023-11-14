import express from 'express'
import { getUsers} from '../controllers/chat.js';
import { verifyUser } from '../middlewares/auth.js';

const router = express.Router();


router.get("/users",verifyUser,getUsers)


export default router;

