const button = document.getElementById('generate')

button.addEventListener('click', function(){
    const min = parseInt(document.getElementById('min').value)
    const max = parseInt(document.getElementById('max').value)

    if(min > max){
       return document.querySelector('#result > span').textContent = 'Coleque um valor valido';
    }

    let result = Math.floor(Math.random() * (max - min + 1) + min)

    if(isNaN(result)){
        result = 'Valor invalido';
    }
    
    document.querySelector('#result > span').textContent = result;
})