var rect={

      perimeter: (x,y)=>(2*(x+y)),
      area: (x,y) =>(x*y)
};

function solveRect(l,b) {

      console.log("Solving for rectangle l="+l+"b="+b);

      if(l<=0 || b<=0){
        console.log("Rectangle dimensions should be greater than 0 ");
      }
      else{

        console.log("Area of Rectangle is "+ rect.area(l,b));
        console.log("Perimeter is "+rect.perimeter(l,b));
      }
}

solveRect(3,5);
solveRect(5,5);
solveRect(2,5);
solveRect(-1,5);
