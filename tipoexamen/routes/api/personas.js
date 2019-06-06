var express = require('express');
var router = express.Router();

var personaCollection = [];

var personaStruct = {
  id:0,
  nombre:'',
  correo:'',
  telefono:'',
  nota:''
}

router.get('/', (req, res, next)=>{
  res.status(403).json({msg:"not implemented"});
});// get

router.get('/:id', (req, res, next) => {
  res.status(403).json({ msg: "not implemented" });
})// get one by Id


router.post('/', (req, res, next)=>{
  res.status(403).json({ msg: "not implemented" });
}); //post


router.put('/:id', (req, res, next)=>{
  res.status(403).json({ msg: "not implemented" });
});//put

router.delete('/:id', (req, res, next)=>{
  res.status(403).json({ msg: "not implemented" });
});//delete

module.exports = router;
