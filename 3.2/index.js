let gridSelect = document.getElementById('gridSelect')
let products = document.getElementById('products')

function changeGrid(e){
    if(e.target.value == 2){
        products.style.gridTemplateColumns = '20% 20%'
    }
    if(e.target.value == 3){
        products.style.gridTemplateColumns = '20% 20% 20%'
    }
    if(e.target.value == 5){
        products.style.gridTemplateColumns = '20% 20% 20% 20% 20%'
    }
}

gridSelect.addEventListener('click', changeGrid)