const https = require("https");
const crypto = require("crypto");
const fs = require("fs"); 

const start = Date.now();

//async call
function doRequest() {
  https.request('https://www.google.com', (res) => {
    res.on("data", () => {});
    res.on("end", () => {
      console.log(Date.now() - start);
    });
  }).end();
}


// threadpool
function doHash() {
  crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
    console.log("Hash:", Date.now() - start);
  });
}



doRequest();



//async call
// threadpool
fs.readFile("6.-ej_multitask.js", "utf8", () => {
  console.log("FS:", Date.now() - start);
});


doHash();
doHash();
doHash();
doHash();


// response 
// 309
// Hash: 2207
// FS: 2209
// Hash: 2223
// Hash: 2242
// Hash: 2243

[
  {
    threadpool: "fs module"
  },
  {
    OS: "https"
  }
]

// 1) thread pool / harddrive
// fs  -> thread1 -> Hard Drive
// https  -> OS
// pbkdf2 (1)-> thread2
// pbkdf2 (2)-> thread3
// pbkdf2 (3)-> thread4
// pbkdf2 (4)-> wait until thread ends

// 2) OS thread scheduler
// 3) cores


// thread1 queda libre mientras fs se ejecuta
// pbkdf2 (4) queda libre y se va hacia thread1

//thread2 (pbkdf2 (1)) termina su ejecucion 
//thread2 busca si ya termino de ejecutarse Hard Drive (fs) y node devuelve resultado