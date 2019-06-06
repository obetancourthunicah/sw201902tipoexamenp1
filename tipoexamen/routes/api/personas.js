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
      nota:'Ejemplo de Persona en ejercicio tipo examen'
    }
    )
);

router.get('/:id', (req, res, next) => {
  if  (!req.params.id) return next();
  var id = req.params.id;
  var persona = personaCollection.filter((e, i) => {
    return (e.id === id);
  });//filter

  if (persona.length > 0) {
    res.status(200).json(persona[0]);
  } else {
    res.status(404).json({});
  }

})// get one by Id
router.get('/', (req, res, next)=>{
  // obtiene la coleccion de personas
  res.status(200).json(personaCollection);
});// get



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
  var id = req.params.id;
  var modifiedPersona = {};
  var originalPersona = {};
  personaCollection = personaCollection.map( (e, i) => {
    if(e.id === id){
      originalPersona = Object.assign({}, e);
      return modifiedPersona = Object.assign({}, e, req.body);
    }
    return e;
  });//map
  res.status(200).json({ o: originalPersona, m: modifiedPersona});
});//put

router.delete('/:id', (req, res, next)=>{
  var id = req.params.id;
  var deletedPersona = {};
  personaCollection = personaCollection.filter((e,i)=>{
    if(e.id === id){
      deletedPersona = Object.assign({},e);
      return false;
    }
    return true;
  });//filter
  res.status(200).json({d:deletedPersona, c:personaCollection});
});//delete

module.exports = router;
