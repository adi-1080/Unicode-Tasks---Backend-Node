// import mongoose from "mongoose";
// import express from "express";
// import { Hogwarts } from "./student.js";

// let connection = await mongoose.connect("mongodb+srv://adityagupta5277:F3xMLShpRoCmnl6z@cluster0.vk3wqkc.mongodb.net/Hogwarts")
// const app = express()
// const port = 3000
// const hostname = '127.0.0.1'

// app.post('/',async(req, res) => {

//     let houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
//     let randomIndex = parseInt(0 + (4-0)*Math.random()); // any random number = a + (b-a)*Math.random() , a and b are range
//     // const student = await new Hogwarts({
//     //     id: req.body.id,
//     //     name: req.body.name,
//     //     gender: req.body.gender, 
//     //     house: houses[randomIndex],
//     //     wizard: req.body.wizard
//     // })
//     const student = await new Hogwarts({
        
//         id: "04",
//         name: "HarryPotter",
//         gender: "male",
//         house: houses[randomIndex],
//         wizard: true
//     })
//     student.save() 
//     console.log(student);
//     res.send('student')
// })
// app.delete('/:id',async(req,res)=>{
//     try{
//         const student = await Hogwarts.deleteOne({id: req.params.id})
//         console.log(`Deleted this : ${student}`);
//         res.status(200).send("student")
//     } catch(e){
//         console.log(e);
//         res.status(500).send("could not be deleted")
//     }
    
// })

// app.listen(port, ()=>{
//     console.log(`Example app listening on server: http://${hostname}:${port}/`);
// })