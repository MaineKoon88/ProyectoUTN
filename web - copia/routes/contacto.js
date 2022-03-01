var express = require('express');
var router = express.Router();
var nodemailer = require ('nodemailer');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto',{
    isCONTACTO:true
  });
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var asunto = req.body.asunto;
  var mail = req.body.email;
  var mensaje = req.body.mensaje;
  //console.log (req.body);

  var obj = {
    to: 'nacho.pgnp@gmail.com',
    subject: 'Contacto desde Web',
    html

  }

  var transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

var info = await transport.sendMail(obj);

res.render('contacto',{
  isCONTACTO: true,
  message: 'Mensaje enviado correctamente'

});


});

module.exports = router;
