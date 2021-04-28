const https = require("https");

const start = Date.now();

//res es un objeto que emite eventos, cuando recivimos data desde google server
function doRequest() {
  https.request('https://www.google.com', (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(Date.now() - start);
    });
  }).end();
}

doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();



// 1)javascript code we write 
// 2)https
// 3)v8
// 4)Node c++ side 
// 5)libuv
// 6)OS async request (el sistema operativo es el que hace el http request.)
    //  no hay nada que bloquee la operacion y no se toca el threadpool en este caso
    // se ejecuta fuera del event loop 


// que funciones en node std library usa OS async feature? 
// casi todo network. algunas otras cosas especificas

// como esto se enlaza al event loop?
// tareas del OS se reflejan en pendingOSTasks