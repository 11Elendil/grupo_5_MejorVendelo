router.get('/login', usersController.login);


router.post('/login',[
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres'),
] usersController.processLogin);

module.exports = router;