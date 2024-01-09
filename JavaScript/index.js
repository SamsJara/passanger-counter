// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count += 1
    countEl.innerText = count
    //console.log(count)
}




function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragrap

    let countReg = count + " - "
    /*tambien podriamos hacer el espacio directamente en :
    saveEl.innerText += " " + countReg
    Creo que también funciona 
    */
    
    //saveEl.innerText += countReg esta fue mi solucion original, pero hay una mejor forma de hacerlo:
    saveEl.textContent += countReg
    
    //resetear el contador mostrado en 0 para tener un nuevo grupo de personas
    count = 0
    countEl.innerText = count



    console.log(saveEl.innerText)
}

