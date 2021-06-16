const labels = document.getElementsByClassName("textBox");

// for (let label of labels) {
//     label.addEventListener("mouseover", ()=>{
//    label.textContent = label.textContent.toUpperCase();
// });

// label.addEventListener("mouseout", ()=>{
//     label.textContent = label.textContent.toLowerCase();
// })
// }
// ;
for (let label of labels) {
label.addEventListener("mouseover", (event)=>{
    let label = event.target;
    label.textContent = label.textContent.toUpperCase();
})

label.addEventListener("mouseout", (event)=>{
    let label = event.target;
    label.textContent = label.textContent.toLowerCase();
})
}

document.addEventListener("keydown", (event) =>{
    labels[1].textContent = `${event.key}`;
})

document.addEventListener("keydown", (event) =>{
    labels[3].textContent = `${event.which}`;
})

document.addEventListener("keydown", (event) =>{
    labels[5].textContent = `${event.code}`;
})