const cards = document.getElementById("cards");
const btn = document.getElementById("add-card")
const emojis = ["😀", "😎", "🤓", "😴", "🤖", "👻", "💩", "🌈", "🔥", "✨", "🍕", "⚡️"];

let counter = 0;

btn.addEventListener("click", () => {
    const card = document.createElement("div")
    card.classList.add("card");
    if (counter >= emojis.length - 1) {
        counter = 0;
    }
    card.textContent = emojis[counter]
    counter++;
    cards.appendChild(card)

    card.addEventListener("click", () => {
        card.remove();
    })
})

async function getData(url) {
  try {
    const response = await fetch(url);
    console.log("response => ", response);
    const data = await response.json();
    console.log("data => ", data);

    return data;
} catch (error) {
  console.log(error)
}
}

const dogBtn = document.getElementById("dogBtn");
const catBtn = document.getElementById("catBtn");
const output = document.getElementById("output");
dogBtn.addEventListener("click", async () => {
    const data = await getData("https://dog.ceo/api/breeds/image/random");
    const img = document.createElement("img");  
    img.src = data.message;
    img.style.width = "200px";
    // output.innerHTML = "";
    output.appendChild(img);
}
);
catBtn.addEventListener("click", async () => {
    const data = await getData("https://api.thecatapi.com/v1/images/search");
    const img = document.createElement("img");
    img.src = data[0].url;
    img.style.width = "200px";
    output.innerHTML = "";
    output.appendChild(img);
}
);


// https://dog.ceo/api/breeds/image/random
// https://api.thecatapi.com/v1/images/search