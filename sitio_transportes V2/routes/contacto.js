var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto',{
    isCONTACTO:true
  });
});

router.post('/', async (req, res, next) => {

  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var mail = req.body.email;
  var mensaje = req.body.mensaje;
  console.log (req.body);


});

module.exports = router;
