const db = require('../data/dbConfig.js');
const Games = require('./game-model.js');

describe('Games', () => {
  afterEach(async () => {
    await db('games').truncate();
  });
  
  describe('Add()', () => {
    it('should add a game', async () => {
      await Games.add({ title: 'League', genre: 'action' });
    
      const game = await db('games');
      expect(game).toHaveLength(1);
    });

    it('should add the appropriate game', async () => {
      let game = await Games.add({ title: 'Jak and Daxter', genre: 'action' });
      expect(game.title).toBe('Jak and Daxter');

      game = await Games.add({ title: 'Crash', genre: 'action' });
      expect(game.title).toBe('Crash');
    });
  });

  describe('Get()', () => {
    it('should add a game and compare it the result', async () => {
      let games = await Games.add({ title: 'RainbowSix', genre: 'shooter', releaseYear: 2010 });
      expect(games).toEqual({
        id: 1,
        title: 'RainbowSix',
        genre: 'shooter',
        releaseYear: 2010
      })

      games = await Games.add({ title: 'Minecraft', genre: 'adventure' });
      expect(games).toEqual({
        id: 2,
        title: 'Minecraft', 
        genre: 'adventure',
        releaseYear: null
      }
    )
    });

  });
});