     // routes/games.js
     const gamesRouter = require("express").Router(); // Создали роутер
     
    const { sendAllGames, deleteGame, addGameController } = require("../controllers/games");
    const { getAllGames } = require('../middlewares/games');
     
     gamesRouter.get("/games", getAllGames, addGameController)
     gamesRouter.post("/games", getAllGames, sendAllGames)
     gamesRouter.delete("/games/:id", getAllGames, deleteGame);
     
     module.exports = gamesRouter;
     