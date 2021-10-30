const Task = require('../models/todo_model');
module.exports.home= function(req,res){
    Task.find({},function(err,task){
        res.render('home',{
            title:'Home',
            
            tasks:task
        });
    })
    
}
module.exports.addTask= function(req,res){
    console.log(req.body.task)
    Task.create({
        task:req.body.task
    })
    return res.redirect('back');
}
module.exports.deleteTask= function(req,res){
    let id = req.params.id;
    Task.findByIdAndDelete(req.params.id,function(err){
        if(err){
            console.log('Error while deleting contact');
        }
        return res.redirect('back');
    });
}

module.exports.updateTask= function(req,res){
    
    Task.findById(req.params.id,function(err){
        res.render('update')
    });
}