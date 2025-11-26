// const myTitle = document.getElementById("title")

// console.log(myTitle)

// myTitle.innerText = "Title is Updated"
// myTitle.innerHTML = "NOW IT IS <em>SUPER PRO</em> UPDATED"

// myTitle.style.color = "red"
// myTitle.style.fontSize = "60px"

// myTitle.classList.add("additional")

// const body = document.body
// console.log(body)
// body.classList.add("body-class-exp")
// body.classList.remove("body-class-exp")
// myTitle.classList.toggle("switcher")

const myParagraphs = document.querySelectorAll(".text")

// console.log(myParagraphs)

// for (let i = 0; i < myParagraphs.length; i++) {
//   console.log(myParagraphs[i])
// }

// // const myTitle = document.getElementById("title")

// const newParagraph = document.createElement("p") // <p></p>
// newParagraph.innerText = "This is added by JS" // <p>This is added by JS</p>
// newParagraph.setAttribute("class", "text")
// // < p class="text" > This is added by JS</p >
// document.body.appendChild(newParagraph)
// document.body.prepend(newParagraph)
// const myButton = document.getElementById("btn")
// document.body.insertBefore(newParagraph, myButton)


// // const myParagraphs = document.querySelectorAll(".text")
// // console.log(myParagraphs)

// // myParagraphs[1].remove()

const btn = document.getElementById("btn")
// // btn.addEventListener("click", () => {
// // //   alert("Button clicked!")
// // myTitle.textContent = "THIS IS CHANGET ON BITTON CLICK"

// //  })
// btn.addEventListener("mouseenter", () => {
//     btn.style.backgroundColour = "blue"
// })
// btn.addEventListener("mouseleave",() =>{
//     btn.style.backgroundColor = ""
// })

const input = document.getElementById("input")
// const output = document.getElementById("output")
// inputElement.addEventListener("input", () => {
//     // output.textContent = 
//     // console.log("inserted", inputElement.value)
// })
// // const thirdParagraph = myParagraphs[2]
btn.addEventListener("click", () => {
    myParagraphs[1].classList.toggle("blue-background")
})

const addButton = document.getElementById("add")
const removeButton = document.getElementById("remove")
const list = document.getElementById("list")

addButton.addEventListener("click", () => {
    const listItem = document.createElement("li")
    listItem.textContent =  input.value || "New item"
    list.appendChild(listItem)
})

removeButton.addEventListener("click", () =>{
    if(list.lastChild) { //unorderedList.lastElementChild {
        list.removeChild(list.lastChild) //unoerderedList.LastElementChild.remove ()
    }
})