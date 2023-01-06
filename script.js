function countWords() {

    let counter = document.querySelector("#counter")

    let text = document.querySelector("#text")

    if (counter.value.length === 0) {
        text.innerHTML = "Su texto no tiene nada"
    } else {

        if (counter.value.length === 1) {
            text.innerHTML = "Su texto tiene solo un carácter"
        } else {

            text.innerHTML = "Su texto tiene un total de: " + counter.value.length + " carácteres"

        }
        
    }

}