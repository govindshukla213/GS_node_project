module.exports= (x,y,callback) =>{
     if(x<=0||y<=0){
       callback(new Error("Rectangle dimensions should be greater than 0 "),null);
     }
     else{
       callback(null,{
         perimeter: (x,y)=>(2*(x+y)),
         area : (x,y)=>(x*y)
       });
     }
};






















perimeter= (x,y)=>(2*(x+y));
area= (x,y) =>(x*y);
