const router = require('express').Router();
const loginGoogle = require('../controllers/login-google');
const signupGoogle = require('../controllers/signup-google');

router.use("/login-google", loginGoogle);
router.use("/signup-google", signupGoogle);

module.exports = router;