const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());


const PORT =  3001;

const start = async () => {
  try {
    mongoose.connect('mongodb+srv://oxxxymiron:v5RXBjrMAET2rvhJ@clust.ntlkt.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      //useUndefinedTopology: true
    });
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();