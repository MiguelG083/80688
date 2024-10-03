const formulario = document.getElementById("formulario")
const miFieldSet= (legend,txt1,txt2)=>{
    return `
    <fieldset>
        <legend>${legend}</legend>
            <label for="1"> ${txt1}:</label>
            <input type="text" id=${txt1}>
            <label for="2"> ${txt2}:</label>
            <input type="text" id=${txt2}>
    </fieldset>
    `
}

formulario.innerHTML=miFieldSet("leyenda","1","2")
formulario.innerHTML+=miFieldSet("leyenda 2","3","4")