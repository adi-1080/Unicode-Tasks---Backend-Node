const express = require('express')
const router = express.Router()
const Student = require('../model/student')
const mongoose = require('mongoose')

router.get('/',(req,res,next)=>{
    Student.find()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            studentData:result
        })
    })
    .catch(err=>{
        // console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:student_id',(req,res,next)=>{
    console.log(req.params.student_id);
    // Student.findById(req.params.student_id)
    Student.findOne({id: req.params.student_id})
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            student:result
        })
    })
    .catch(err=>{
        // console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.post('/',(req,res,next)=>{
    const student = new Student({
        id:req.body.id,
        name:req.body.name,
        gender:req.body.gender,
        house:req.body.house,
        wizard:req.body.wizard
    })
    student.save()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            new_student_added: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
router.post('/randomhouse',(req,res,next)=>{
    let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let randomIndex = parseInt(0 + (4-0)*Math.random()); // any random number = a + (b-a)*Math.random() , a and b are range
    const student = new Student({
        id:req.body.id,
        name:req.body.name,
        gender:req.body.gender,
        house:houses[randomIndex],
        wizard:req.body.wizard
    })
    student.save()
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            new_student_added: result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/:student_id',(req,res,next)=>{
    // Student.findByIdAndDelete(req.params.student_id)
    Student.findOneAndDelete({id: req.params.student_id})
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            message: "Student data deleted",
            deleted_student:result
        })
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            message: "Could not delete student data",
            error: err
        })
    })
})

router.put('/:student_id',(req,res,next)=>{
    Student.findByIdAndUpdate(req.params.student_id, req.body, {new: true})
    .then(result=>{
        // console.log(result);
        res.status(200).json({
            message: "Student house updated",
            updated: result
        })
    })
    .catch(err=>{
        // console.log(err);
        res.status(500).json({
            message: "Could not update student house"
        })
    })
})

router.get('/',(req,res,next)=>{
    // Student.find({id: "07"})
    Student.name.startsWith(req.query.name)
    .then(result=>{
        res.status(200).json({
            message: "Search finished",
            found_students: result,
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: "Search not in database",
            error: err
            
        })
    })
})

module.exports = router