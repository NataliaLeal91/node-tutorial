const cluster = require("cluster");


//el archivo se esta ejecutando en modo master? 
if (cluster.isMaster) {
  // hace que index.js se ejecute "otra vez", en modo "child"
  cluster.fork();
  // cluster.fork();
  // cluster.fork();
  // cluster.fork();
} else {

  //soy child, voy a actuar como servidor, y no hare nada mas

  const express = require("express");
  const app = express();

  function doWork(duration) {
    const start = Date.now();

    while (Date.now() - start < duration) {}

    app.get("/", (req, res) => {
      doWork(5000);
      res.send("hi there");
    });

    app.get("/fast", (req,res) => {
      res.send("this was fast");
    });

    app.listen(3000);
  }

}
