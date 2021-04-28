// process.env.UV_THREADPOOL_SIZE = 2;

// set UV_THREADPOOL_SIZE=2 & node 2.-is_single_thread_question.js (en la terminal) 



// Node Event Loop  --> single threaded
//  cuando se inicia node, se crea una instancia del event loop y se pone en un hilo
// 1 core por CPU.

// Some of Node  Framework/Std Lib --> Not single threaded

// no todo en node es single threaded

const crypto = require("crypto");

const start = Date.now();
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log("1:", Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log("2:", Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log("3:", Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log("4:", Date.now() - start);
});
crypto.pbkdf2('a', 'b', 100000, 512, 'sha512', () => {
  console.log("5:", Date.now() - start);
});

// un thread presenta una serie lineal de instrucciones a nuestro CPU
  // -> CPU presenta las instrucciones en orden


// CPU
// [core1(t1,t2),  core2(t3,t4)]

// OS thread Scheduler

// Thread pool 
// t1,t2,t3,t4


// ----------------------------------------

//1.- se puede usar threadpool para codigo de javascript o solo en las funciones de node ?
//res  se puede escribir custom js que use thread pool

// 2.- que funciones de node std library usa threadpool ? 
// res  todo el 'fs' module, algunas funciones crypto. Depende del OS

// 3.- como este threadpool machea con el event loop
//  res  las tareas que corren en el threadpool son pendingOperations
        //  pendingOperations es codigo que esta siendo ejecutado dentro del threadpool




  