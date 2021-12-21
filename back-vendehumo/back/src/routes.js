const router = require('express').Router();
//const AuthController = require('./controllers/auth.controllers')
const VhController = require('./controllers/vh.controllers')
//const {isTokenValid} = require('./utils/middlewares')

//router.post('/signup', AuthController.signup);
//router.post('/login', AuthController.login);

router.get('/vendehumos', VhController.getVendehumo);

//router.use(isValidToken)
//router.post('/noticias', isTokenValid, NoticiasController.createNoticia);
//router.post('/vendehumos', VhController.createVendehumo);



module.exports = router;