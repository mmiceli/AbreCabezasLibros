
buscarItem()

function buscarItem() {
   let itemBuscado = document.getElementById("itemBuscado")
   let buscar = document.getElementById("buscar")
   
   buscar.onclick = () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${itemBuscado.value}+intitle:keyes&key=AIzaSyBBGGQFcZT6Cner0ypItpvs3fW1moW1HeI`)
         .then((response) => response.json())
         .then((json) => {
            console.log (json)
            mostrarDatos(json)})
         .catch(() => alert("intente de nuevo"))
   }
}

function mostrarDatos(data) {
    const div = document.getElementById("items");
    div.innerText = "";
    data.items.forEach(item => {
       let divPost = document.createElement("div");
       divPost.innerHTML = `<h5>Id: ${item.id}</h5>
                           <br>
                           <h4>Titulo: 
                           ${item.volumeInfo.title}
                          </h4>
                          <br>
                          <h4>Detalle: 
                          ${item.volumeInfo.subtitle}
                         </h4>
                           <hr />
       `
       div.appendChild(divPost)
 
    })
 }