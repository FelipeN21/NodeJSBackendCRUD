const express = require('express');
const sensor = require('../models/Sensor');

const router = express.Router();
const Ssensor = require('../models/Sensor')



router.get('/', (req,res) => {
    res.send("Landing page - Adicionar ao atual Link os seguinte elementos de acordo com a sua necessidade : \n /cadastrar - Cadastra por meio de um objeto Json um novo sensor \n /visualizar - Mostra todos os sensores atualmente cadastrados \n /editar - Permite a edicao de sensores \n /remover - Remove um certo sensor");
});

//Puxa todos os Sensores possiveis
router.get('/visualizar', async (req,res) => {
    
    try{
        const Sensores = await Ssensor.find();
        res.json(Sensores);
    }catch(err){
        res.json({message: err})
    }

});

router.post('/cadastrar', async (req,res) => {

const sensor = new Ssensor({

    Tamanho: req.body.Tamanho, 
    TensaoBateria : req.body.TensaoBateria,
    Marca : req.body.Marca,
    Tipo : req.body.Tipo,
    CoordenadaGPS : req.body.CoordenadaGPS,
    UltimaMedicao : req.body.UltimaMedicao

});
try{
const SensorSalvo = await sensor.save();

res.json(SensorSalvo);
}catch(err){
    res.json({message: err})
}
});


//Todas as rotas direcionadas a '/:postId' sao dinamicas e respondem a certos valores e de acordo com o metodo utilizado get/delete/patch 

//buscando sensor especifico via seu id 
router.get('/:postID', async (req,res) => {
    const sensorRR = Ssensor.findById(req.params.postID);
    try{
    res.json(post);
}catch(err){res.json({message : err})}
});



//remocao de Sensores do BD
router.delete('/:postId', async (req,res) => {
    try{
const deletado = await Ssensor.remove({_id : req.params.postId});
res.json(deletado)
}catch(err){
    res.json({message : err});
}
});

//Atualizar dados no BD
router.patch('/:postId', async (req,res) => {
    try{
const updated = await Ssensor.updateOne({_id : req.params.postId}, {$set : {UltimaMedicao : req.body.UltimaMedicao}});
res.json(updated)
}catch(err){
    res.json({message : err});
}
});


module.exports = router;