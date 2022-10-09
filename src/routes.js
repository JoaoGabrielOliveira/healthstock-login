import express from 'express';

import Login from './service/login.js';
import { getUser, getAllUser, deleteUser, saveUser, updateUser } from "./service/user.js";

const router = express.Router();

router.post("/login", Login);

router.post("/users/", saveUser );
router.get("/users", getAllUser );
router.get("/users/:id", getUser );
router.put("/users", updateUser);
router.delete("/users/:id", deleteUser );

export default router;