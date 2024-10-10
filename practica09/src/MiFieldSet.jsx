import './MiFieldSet.css'

function MiFieldSet(params) {
    //p1 es el titulo
    //id1 es el id para p2
    //p2 es el nombre
    //id2 es el id para p3
    //p3 es el password
    const {p1, id1, p2, id2, p3} = params
    return (
        <>
            <fieldset>
                <legend>{p1}</legend>
                <label htmlfor={id1}>{p2}</label>
                <input type="text" id={id1}></input>
                <label htmlfor={id2}>{p3}:</label>
                <input type="text" id={id2}/>
            </fieldset>
        </>
    )
}

export default MiFieldSet
