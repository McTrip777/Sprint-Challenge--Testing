const db = require('../data/dbConfig.js');
const Games = require('./game-model.js');

describe('Games', () => {
  afterEach(async () => {
    await db('games').truncate();
  });

  
});