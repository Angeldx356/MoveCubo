var count = 0 ;
var count2 = 0;
var btnizq = document.getElementById('izq'); //Declaro mi boton y le doy el valor del id que esta dentro del codigo HTML
var btnder = document.getElementById('der'); 
var btnarr = document.getElementById('arri'); 
var btnaba = document.getElementById('aba'); 
var btncolor = document.getElementById('colorxd');

btnizq.addEventListener('click', function () { //Espero un Evento que esta asignado al boton "click"
    count -= .5;
    actualizarPosicion(count,count2); //llamo la funcion y le asigno el valor del contador menos el valor del movimiento dentro del plano
    document.getElementById("contador").value=count; //en la caja de texto con el ID "contador" le asigno el valor de la posicion en x del cubo
});

btnder.addEventListener('click', function () {
    count += .5;
    actualizarPosicion(count,count2);
    document.getElementById("contador").value=count;
});

btnarr.addEventListener('click', function () {
    count2 += .5;
    actualizarPosicion(count,count2);
    document.getElementById("contador2").value=count2;
});

btnaba.addEventListener('click', function () {
    count2 -= .5;
    actualizarPosicion(count,count2);
    document.getElementById("contador2").value=count2;
});

btncolor.addEventListener('click', obtenerColor);   

function actualizarPosicion(x,y) {
    var cubo = document.getElementById('miCubo'); //En la variable le asigno el cubo como su valor para modificarlo
    cubo.setAttribute('position', `${x} ${y} -3`); // Se modifica el atributo "posicion" del cubo solo en el valor de x
}

function obtenerColor() {
    var btncolor = document.getElementById("colorin");
    var colorSeleccionado = colorin.value;
    cubo.setAttribute('color', colorSeleccionado);
}