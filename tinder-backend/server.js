import express from 'express';
import mongoose from 'mongoose'
import Cards from './dbcard.js';
import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const url_Connection = 'mongodb+srv://admin:samna@cluster0.lcuqd.mongodb.net/tinderdb?retryWrites=true&w=majority';

// Middleares
app.use(express.json());
app.use(Cors());

// DB config
  mongoose.connect(url_Connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
// API Endpoints
app.get('/' , (req, res) => res.status(200).send('hello tinder2'));
app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err,data) =>{
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(201).send(data)
    }
  })
});
app.get("/tinder/cards", (req, res) => {
  Cards.find((err,data) =>{
    if (err) {
      res.status(500).send(err)
    }
    else {
      res.status(200).send(data)
    }
  })
})

//listeners 
app.listen(port,() => console.log("listenin on localhost: "+ port)); 