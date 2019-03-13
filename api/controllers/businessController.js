'use strict';


  var mongoose = require('mongoose'),
  Task = mongoose.model('Student');


  var mongoose1 = require('mongoose'),
  Reg = mongoose.model('Register');



exports.list_all_tasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};




exports.create_a_task = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

// *************************************************************************?

exports.list_all_user = function(req, res) {
  Reg.find({}, function(err, create_user) {
    if (err)
      res.send(err);
    res.json(create_user);
  });
};


exports.create_a_user = function(req, res) {
  var new_create_a_user = new Reg(req.body);
  new_create_a_user.save(function(err, create_user) {
    if (err)
      res.send(err);
    res.json(create_user);
  });
};

// exports.signin_a_user = function(req, res) {
//   Reg.findById(req.params.signin_a_userId, function(err, signin) {
//     if (err)
//       res.send(err);
//     res.json(signin);
//   });
// };


exports.signin_a_user = function(req, res) {
  Reg.findOne({mobile:req.params.mobile}, function(err, signin_user) {
    if (err)
      res.send(err);
    res.json(signin_user);
    }
  )};


  exports.update_password = function(req, res) {
    // console.log(req.params.name)
    Reg.findOneAndUpdate({name: req.params.name}, req.body, {new: true}, function(err, update_user) {
      if (err)
        res.send(err);
      res.json(update_user);
    });
  };

// *************************************************************************?

exports.read_a_task = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function(req, res) {
  Task.deleteOne({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};