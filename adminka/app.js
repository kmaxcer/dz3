     // app.js 
     const express = require('express');
     const path = require('path'); 
     const bodyParser = require('body-parser');
     const mainRoute = require('./routes/main');
     const gamesRouter = require('./routes/games'); 
     
     const PORT = 3000;
     const app = express();
     
     // Запускаем
     app.use(mainRoute, gamesRouter, bodyParser.json()); 
     app.use(express.static(path.join(__dirname, 'public')));
     app.listen(PORT, () => {
       console.log(`Server is running at PORT http://localhost:${PORT}`);
     })
     