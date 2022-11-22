let buttonFlex = document.getElementById('buttonFlex')
let form = document.getElementById('form')

function changeFormFlex(){
    form.style.flexDirection = 'column'
    form.style.alignItems = 'flex-end'
}

buttonFlex.addEventListener('click', changeFormFlex)

let buttonGrid = document.getElementById('buttonGrid')

function changeFormLayout(){
    form.style.display = 'grid'
    form.style.gridTemplateColumns = '250px 250px 250px'
    form.style.gap = '25px'
}

buttonGrid.addEventListener('click', changeFormLayout)

let buttonReset = document.getElementById('buttonReset')

function resetLayout(){
    form.style.display = 'flex'
    form.style.flexDirection = 'row'
    form.style.justifyContent = 'center'
    form.style.flexWrap = 'wrap'
    form.style.textAlign = 'center'
}

buttonReset.addEventListener('click', resetLayout)




