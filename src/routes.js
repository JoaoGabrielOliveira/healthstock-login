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


router.post("/cadastro/comprador", saveRegistrationBuyer);
router.get("/cadastro/comprador", getAllRegistrationBuyer);
router.get("/cadastro/:id/comprador", getRegistrationBuyer);
router.put("/cadastro/comprador", updateRegistrationBuyer);

router.post("/cadastro/fornecedor", saveRegistrationSupplier);
router.get("/cadastro/fornecedor", getAllRegistrationSupplier);
router.get("/cadastro/:id/fornecedor", getRegistrationSupplier);
router.put("/cadastro/fornecedor", updateRegistrationSupplier);

export default router;