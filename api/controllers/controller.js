'use strict';


var mongoose = require('mongoose'),
  Statu = mongoose.model('statu');

exports.Get_statu =(req, res)=>{
    res.set("Access-Control-Allow-Origin","*");
    Statu.find({},(err, statu) =>{
    if (err)
      res.send(err);
    res.json(statu);
  });
};




exports.create_a_statu = (req, res)=>{
  var new_statu = new Statu(req.body);
  new_statu.save((err, statu)=>{
    if (err)
      res.send(err);
    res.json(statu);
  });
};


exports.delete_a_statu = (req, res)=>{
  Statu.remove({
    _id: req.body.statuid
  }, (err, statu) => {
    if (err)
      res.send(err);
    res.json({ message: 'Statu successfully deleted' });
  });
};

