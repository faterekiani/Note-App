let $ = document

let inputElem = $.querySelector('input')
let addInput = $.querySelector('#btn-save')
let removeInput = $.querySelector('#btn-delete')
let colorsBox = $.querySelectorAll('.color-box')
let containerListed = $.querySelector('#listed')




function removeButton(event){
    inputElem.value = ''
    inputElem.style.backgroundColor = '#fff'
}

function addNewNote(event){
    let divElem = $.createElement('div')
    divElem.className = 'card shadow-sm rounded'
    let pElem = $.createElement('p')
    pElem.className = 'card-text p-3'
    pElem.innerHTML = inputElem.value
    divElem.append(pElem)
    containerListed.append(divElem)

    divElem.style.backgroundColor = inputElem.style.backgroundColor
    divElem.addEventListener('click',removeItem )

    removeButton()
}

function removeItem(event){
    event.target.parentElement.remove()
}




inputElem.addEventListener('keyup', function(event){
    if(event.keyCode ===13 ){
        if(inputElem.value)
            addNewNote()
    }
})



/* COLOR */
colorsBox.forEach(function(color){
    color.addEventListener('click', function(event){
        let colorField = event.target.style.backgroundColor
        inputElem.style.backgroundColor = colorField
    })
})



addInput.addEventListener('click', addNewNote)  //DONE
removeInput.addEventListener('click', removeButton)  //DONE


// containerListed.addEventListener('click', removeItem)
