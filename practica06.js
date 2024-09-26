const usuario = false
const password = false
const formulario = document.getElementById("formulario")
formulario.addEventListener("submit", ()=>{
    e.preventDefault()
    console.log("se presionó el botón enviar")
    if(!usuario && password){
        console.log("Enviando")
        formulario.submit()
    }
})

const x = document.getElementById("x")
x.addEventListener("focusout", ()=>{
    if(x.value.length == 0){
        //alert("El campo está vacío")
        document.getElementById("mensaje1").innerHTML = "El campo esta vacío"
    }
    else{
        document.getElementById("mensaje1").innerHTML = ""
        usuario = true
    }
})

const enviar = document.getElementById("xx")

const y = document.getElementById("y")
y.addEventListener("keypress", e=>{
    console.log(e.key + " " + y.value.length)
    if(e.value.length >= 4){
        enviar.focus
        password = true
    }
})


function limpiar(){
    x.value = ""
    x.value = ""
}

