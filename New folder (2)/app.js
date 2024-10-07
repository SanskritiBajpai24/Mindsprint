// const a ={
//     name:"invertis",
//     course:"btech",
//     fonded: 2005

// }
// console.log(a)
// a.name = "srms"
// console.log(a)

// const a =new Object();
// console.log(a)

// let car =new Object();
// car.brand ="maruti";
// car.model = 2015;
// console.log(car)

let car={
    brand :"maruti",
    model : 2015,
    start : function(){
    console.log("car is running")
   }
};
// let cloneObject = Object.assign({},car);
// console.log(cloneObject)
Object.freeze(car);