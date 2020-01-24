var rect= require('./rectangle');

function solveRect(l,b) {

      console.log("Solving for rectangle l="+l+"b="+b);

         rect(l,b,(err,a)=>{
            if(err){
              console.log(err.message);
            }
            else {
              console.log("Area of Rectangle is "+ a.area(l,b));
              console.log("Perimeter is "+a.perimeter(l,b));

            }

         });

}

solveRect(3,5);
solveRect(5,5);
solveRect(2,5);
solveRect(-1,5);
