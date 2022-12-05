import express from 'express';

import Login from './service/login.js';
import { getUser, getAllUser, deleteUser, saveUser, updateUser, sendEmail } from "./service/user.js";
import { saveRegistrationBuyer, updateRegistrationBuyer } from "./service/registrationBuyer.js";
import { saveRegistrationSupplier, updateRegistrationSupplier } from "./service/registrationSupplier.js";

const router = express.Router();

router.post("/login", Login);

router.post("/users/", saveUser );
router.get("/users", getAllUser );
router.get("/users/:id", getUser );
router.put("/users", updateUser);
router.delete("/users/:id", deleteUser );


router.post("/cadastro/comprador", saveRegistrationBuyer);
router.put("/cadastro/comprador", updateRegistrationBuyer);

router.post("/cadastro/fornecedor", saveRegistrationSupplier);
router.put("/cadastro/fornecedor", updateRegistrationSupplier);

router.post("/sendEmail", sendEmail)

export default router;