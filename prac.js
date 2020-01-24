//  here in this code we are using modules

 // module.exports.delay= ()=> {setInterval(()=>{console.log('Hello Everyone');},2000);};

//   Learning about   Events
var event=require('events');
var ee  = new event.EventEmitter();
  function ringbell(){

      console.log('Ring ring ring');
  }
  function greeting(){ console.log("Welcome");}

ee.on('open door',ringbell);
ee.on('door open',greeting);
ee.emit('open door');
ee.emit('door open');
