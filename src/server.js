import express from 'express';
import {returnChampionShip, returnChampionShipById, 
        returnChampionShipByYear, returnChampionShipByTeam} from './service/returnChampionShip.js';

const app  = express()
const PORT = process.env.PORT


app.get('/championShip', async (req, res) => {

    let championShip

    let year = parseInt(req.query.year)
    let team = req.query.team

    if(typeof year === 'undefined' && typeof team === 'undefined'){

        championShip = await returnChampionShip() 

    } else if(typeof year !== 'undefined'){

        championShip = await returnChampionShipByYear(year)

    }else if(typeof team !== 'undefined'){

        championShip = await returnChampionShipByTeam(team)
    }

    if(championShip.length > 0){

        res.json(championShip)

    } else{

        res.status(404).json({message: 'Nenhum campeonato encontrado.'})
    }

})

app.get('/championShip/:id', async (req, res) => {

    const id = parseInt(req.params.id)

    const championShip = await returnChampionShipById(id) 

    if(championShip.length > 0){
        
        res.json(championShip)
    } else {
        res.status(404).json({message: 'Nenhum resultado encontrado com o id informado!'})
    }

})


app.listen(PORT, async () => {

    let data = new Date().toLocaleDateString()

    console.log(`Server is running on port ${PORT} at ${data}`)

})