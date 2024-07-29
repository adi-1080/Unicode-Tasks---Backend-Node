const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.get('/characters', async (req, res) => {
    try{
        const response = await fetch('https://hp-api.onrender.com/api/characters')
        const characters = await response.json()
        res.status(200).send(characters)
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            error: e
        })
    }
})
app.get('/characters/:id', async (req, res) => {
    try{
        const id = req.params.id
        const response = await fetch(`https://hp-api.onrender.com/api/character/${id}`)
        const characters = await response.json()
        res.status(200).json(characters)
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            error: e
        })
    }
})
app.get('/harrypotter', async (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'harrypotter.html'));
})
app.get('/spells', async (req, res) => {
    try{
        const response = await fetch('https://hp-api.onrender.com/api/spells')
        const characters = await response.json()
        res.status(200).send(characters)
    }
    catch(e){
        console.log(e);
        res.status(500).json({
            error: e
        })
    }
    
})
app.get('/staff', async (req, res) => {
    try{
        const response = await fetch('https://hp-api.onrender.com/api/characters/staff')
        const characters = await response.json()
        res.status(200).send(characters)
    }catch(e){
        res.status(500).json({
            error: e
        })
    }
})
app.get('/students', async (req, res) => {
    try {
        const response = await fetch('https://hp-api.onrender.com/api/characters/students')
        const characters = await response.json()
        res.status(200).status(200).send(characters)
    } catch (e) {
        console.log(e + "Failed to load students");
        res.status(500)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})