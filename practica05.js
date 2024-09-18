const app = document.getElementById("app")
const url = "https://picsum.photos/id/"
const size = "/200/200"
console.log(app)
console.log(url)
const picture = parametro => {
    const src = url + parametro + size
    return `
            <figure>
                <img src="https://picsum.photos/id/${parametro}/200/200" alt="" id="${parametro}">
                <figcaption>${parametro}</figcaption>
            </figure>
            `
}

//console.log(picture())

app.innerHTML = picture(1) + picture(2) + picture(3)

const elemento1 = document.getElementById("1")
const elemento2 = document.getElementById("2")
const elemento3 = document.getElementById("3")
elemento.addEventListener("click",miFuncion)
elemento.addEventListener("click",miFuncion)
elemento.addEventListener("click",miFuncion)

function miFuncion(parametro){
    console.log("hayyy: ")
    console.log(parametro)
}
