let para = document.getElementById("text");
let search = document.getElementById("btn");

btn.addEventListener('click' , () => {
    let input = document.getElementById('input').value 
   
    if(input !== ""){
        let retun = new RegExp(input, 'gi')
        para.innerHTML = para.textContent.replace(retun , '<mark>$&</mark>')
    }

})