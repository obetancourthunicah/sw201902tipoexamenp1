var express = require('express');
var router = express.Router();
// esto es nuevo es para generar un identificador unico
var uuid = require('uuid/v4');

var personaCollection = [];

var personaStruct = {
  id:0,
  nombre:'',
  correo:'',
  telefono:'',
  nota:''
}

personaCollection.push(
  Object.assign(
    {},
    personaStruct,
    {
      id:uuid(),
      nombre:'Orlando J Betancourth',
      correo:'obetancourthunicah@gmail.com',
      telefono: 'jajajaja',
      notas:'Ejemplo de Persona en ejercicio tipo examen'
    }
    )
);

router.get('/', (req, res, next)=>{
  // obtiene la coleccion de personas
  res.status(200).json(personaCollection);
});// get

router.get('/:id', (req, res, next) => {
  res.status(403).json({ msg: "not implemented" });
})// get one by Id


router.post('/', (req, res, next)=>{
  var newPersona = Object.assign(
    {},
    personaStruct,
    {id:uuid()},
    req.body
  );
  personaCollection.push(newPersona);
  res.status(200).json(newPersona);
}); //post


router.put('/:id', (req, res, next)=>{
  res.status(403).json({ msg: "not implemented" });
});//put

router.delete('/:id', (req, res, next)=>{
  res.status(403).json({ msg: "not implemented" });
});//delete

module.exports = router;
