const { callbackify } = require("node:util")

// node index.js 
//  hay mas trabajo que hacer ?
//  Busca en timers, OS task, threadpool 
//   no -> cerrar programa
//   si ->
//     -run settimeout, setinterval
//     -Run callbacks for any os tasks or threadpool tasks that are done. 
//     (99% del codigo)
//     -pauses and wait for stuff to happen
//     -run any setImmediate functions 
//     -handle close events
    // -repeat 