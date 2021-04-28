//node myFile.js



const pendingTimers     = [];
const pendingOSTasks    = [];
const pendingOperations = [];


// new timmers, tasks, operations are recorded from myFile running
miFile.runContents();

//event loop

function shouldContinue () {
    // check one: any pending setTimeout, setInterval, setImmediate ? 
    // check two: any pending OS tasks ? (like server listening to port)
    // check three: any pending long running operations. (like fs module => lee informacion del disco duro)

    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// tick = todo el body se ejecuta en un tick
// cada vez que el event loop corre dentro de node = es un tick. 
while (shouldContinue()) {//esto es un tick
  //1.- node looks at pendingTimers and sees if any functions are ready to be called. setTimeOut, setInterval 
  //2.- node looks at pendingOSTasks, and pendingOperations, and calls relevant callbacks
  //3.- pause execution. Continue when...
  //- a new pendingOSTasks is done
  //- whenever a new pendingOperation is done
  //- a timer is about to complete

  //4.- Look at pendingTimers. Call any setInmediate
  //5.- Handle any 'close' events
}







//exit back to terminal