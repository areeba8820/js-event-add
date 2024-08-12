// let button1 = document.querySelector("#btn1");
// // button1.addEventListener("dblclick",(e) =>{

// //     console.log(e);
// //     console.log(e.type);
// //     console.log(e.clientX);
// //     console.log(e.clientY);
// // }) 


// button1.addEventListener("click",() =>{
//     console.log("This is handler-1");
// })

// button1.addEventListener("mouseover",() =>{
//     console.log("This is handler-2");
// })

// const handler3 = () =>{
//     console.log("This is a handler-3");
// }

// button1.addEventListener("click",handler3)

// // button1.addEventListener("click",() =>{
// //     console.log("This is handler-3");
// // })

// button1.addEventListener("click",() =>{
//     console.log("This is handler-4");
// })

// button1.removeEventListener("click",handler3)


const mydiv = document.getElementById("main");
const myFunction = () => {
    document.getElementById("demo").innerHTML = Math.random();
}
mydiv.addEventListener("mousemove", myFunction );

const removeHandler =()=>{
    mydiv.removeEventListener("mousemove", myFunction)
}
