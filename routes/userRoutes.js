let {Router}=require("express");
const { signup, signin } = require("../controllers/userController");

let router = Router();

router.post("/signup",signup)

router.post("/signin",signin)


module.exports= router