let descuentoEstudiante    = 0.2;
let descuentoTrainee    = 0.5;
let descuentoJunior     = 0.85;

const cantidad         = document.getElementById('cantidad');
const resumencito        = document.getElementById('resumen');
const restablecer     = document.getElementById('borrar')
const optionCategoria    = document.getElementById('categoria');

cantidad .addEventListener("click", precioFinal);
resumencito.addEventListener("click", resumen);
restablecer.addEventListener("click", reestablecer);


function precioFinal(){

    let precio = 200;

    if (optionCategoria.value == 'Estudiante') {
        precio = (precio * descuentoEstudiante) * cantidad.value;
    } else if (optionCategoria.value == 'Trainee') {
        precio = (precio * descuentoTrainee) * cantidad.value;
    } else {
        precio = (precio * descuentoJunior) * cantidad.value;
    }

    return precio;
}



function resumen(){
    document.getElementById("total_a_pagar").innerHTML = precioFinal()}

 function reestablecer(){
    document.getElementById("total_a_pagar").innerHTML = '0.00';}