const app = document.getElementById("app")
const url = "https://picsum.photos/id/"
const size = "/200/200"

const picture = parametro => {
    const src = url + parametro + size
    return `
    <figure>
        <img src="https://picsum.photos/id/${parametro}/200/200" alt="" id="${parametro}" class="">
        <figcaption>${parametro}</figcaption>
    </figure>
        `
}

//console.log(picture())

app.innerHTML = picture(1) + picture(2) + picture(3)

//const elemento1 = document.getElementById("1")
//const elemento2 = document.getElementById("2")
//const elemento3 = document.getElementById("3")
//elemento1.addEventListener("click", miFuncion)
//elemento2.addEventListener("click", miFuncion)
//elemento3.addEventListener("click", miFuncion)

const lista = document.querySelectorAll("img")

//simplifica lo de arriba
for(let i=0; i<lista.length; i++){
    //con esto solo pasar el mouse cambia la forma
    //simplifica de hacer lo de abajo
    lista[i].addEventListener("mouseenter", (evento) => {evento.target.classList.toggle("redonda")})
}

//con esto se hace el movimiento de click y cambiar
function miFuncion(evento) {
    console.log("hayyy: ")
    console.log(parametro.target)
    var imagen = parametro.target
    imagen.classList.toggle("redonda")
}
