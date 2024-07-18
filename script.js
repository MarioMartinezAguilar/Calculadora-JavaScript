//esta función agrega a la pantalla el valor del botón que toquemos de la calculadora 
function agregar(valor){
    document.getElementById('pantalla').value += valor
}
//esta función borra todo de la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}
//esta función calcula las operaciones matemáticas
function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}
