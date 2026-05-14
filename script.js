console.log(colorPicker.value)

  const swatch = document.createElement("div")
  swatch.className = "swatch"
  console.log(swatch)

  const colorDiv = document.createElement("div")
  swatch.appendChild(colorDiv)
  
  swatchGrid.appendChild(swatch)
  console.log(colorPicker.value)

  const swatch = document.createElement("div")
  swatch.className = "swatch"
  console.log(swatch)

  const colorDiv = document.createElement("div")
  swatch.appendChild(colorDiv)
  
  swatchGrid.appendChild(swatch)
  addBtn.addEventListener("click", function() {
  const hex = colorPicker.value

  const swatch = document.createElement("div")
  swatch.className = "swatch"
  console.log(swatch)

  const colorDiv = document.createElement("div")
  colorDiv.className = "swatch-color"
  colorDiv.style.backgroundColor = hex
  swatch.appendChild(colorDiv)

  swatchGrid.appendChild(swatch)
  

  


  //  <div class="swatch-grid" id="swatch-grid">
     // colorDiv = document.createElement("div")
  // </div>


})