const express = require('express');
const router = express.Router();
const Task = require('../../models/Task');

router.all('/*', (req, res, next)=>{
    req.app.locals.layout = 'board';
    next();
});

router.get('/', (req, res)=>{
   Task.find({}).then(tasks=>{
        res.render('board/tasks', {tasks: tasks});
    });
});

router.get('/create', (req, res)=>{
    res.render('board/tasks/create');    
});

router.post('/create', (req, res)=>{
    
   console.log(req.body);  

   const newTask = new Task({
        name: req.body.name,
        content: req.body.content,
        details: req.body.details,
        deadline: req.body.deadline
    });
    newTask.save().then(savedTask=>{
        res.redirect('/board/tasks');
    }).catch(error=>{
        console.log(error);      
    });    
});   







router.get('/edit/:id', (req, res)=>{
    Task.findOne({_id: req.params.id})
        .then(task=>{        
             res.render('board/tasks/edit', {task: task});  
    }); 
});



router.put('/edit/:id', (req, res)=>{


    
    Task.findOne({_id: req.params.id})
        .then(task=>{         

            task.name = req.body.name;
            taks.content = req.body.content;
            task.details = req.body.details;
            task.deadline = req.body.deadline;
 
    
            task.save().then(updatedTask=>{
                
                res.redirect('/board/tasks');        
                
            });
                   
    }); 


});








router.delete('/:id', (req, res)=>{
    
    
    Task.remove({_id: req.params.id})
        .then(result=>{
                
                res.redirect('/board/tasks');  
        });
        
    
});


module.exports = router;