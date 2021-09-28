const express = require("express");
const router = express.Router();
const userCtrl= require("../controllers/userCtrl");
const {loginRules,regiterRules,validation} = require('../middleware/Authvalidator');
const isAuth =require("../middleware/passsport")
const authCtrl = require('../controllers/authCtrl');

//register
router.post("/register",regiterRules(),validation, authCtrl.register)
//login
router.post("/login",loginRules(),validation, authCtrl.login);
//passport
router.get("/current",isAuth(),authCtrl.current);


module.exports = router;


router.get("/",userCtrl.get);
router.get("/:id",userCtrl.getOne);
router.delete("/:id",userCtrl.delete);
router.put("/:id",userCtrl.put);



module.exports = router;




