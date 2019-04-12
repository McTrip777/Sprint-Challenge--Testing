const express = require('express');

const Games = require('../games/game-model.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const game = await Games.get();
        if(game){
            res.status(200).json(game);
        }else{
            res.status(422).send('Error, Need to add title/genre');
        }
      } catch (error) {
        res.status(500).json(error);
      }
});

router.post('/', async (req, res) => {
    try {
        const game = await Games.add(req.body);
        if(check){
            res.status(422).send('ERROR missing fields')
        }else{
            res.status(200).json(game);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

const check = () => {
    const { genre, title } = req.body;
   if(!title || !genre || 
    typeof title === 'string' || 
    typeof genre === 'string' ||
    genre.length < 1 || title.length < 1){
        return true
    }else{
        return false
    }
}

module.exports = router;