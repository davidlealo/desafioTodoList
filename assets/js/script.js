//Variables para imprimir resultados en el DOM
let totalResultado = document.querySelector('#total-resultado');
let totalRealizadas = document.querySelector('#total-realizadas');
let botonAgregar = document.querySelector('#buttonTask');
let tablaTotales = document.querySelector('#tabla');

//Variable contador
let contadorTotalTareas= 0;

//Array de inicio
let tareasIniciales = [
    {
        id: 1,
        nombre: 'Revisar PDF con la presentación semanal'
    },
    {
        id: 2,
        nombre: 'Ensayar guía de ejercicios'
    },
    {
        id: 3,
        nombre: 'Asistir a mentoría semanal'
    }
];

//Array de realizadas
let tareasRealizadas = [];

/*

//Agregar nueva tarea

botont.addEventListener("click",function(){

    let valorInput = document.querySelector('#textTask');

    if (valorInput.value==""){
        alert("Debe escribir una tarea nueva");
    }
    else{

        let tareaNueva = {
            id: tareasIniciales.length+1,
            nombre:  valorInput.value
        };
       
        tareasIniciales.push(tareaNueva);
        refrescar();
    }
});



// checkbox

function conteoTareasRealizadas(v){

    if (v.checked==true){
        v.parentNode.style.backgroundColor="green";
        conteoTareasTareasRealizadas++;
    }
    else{
        v.parentNode.style.backgroundColor="";
        conteoTareasTareasRealizadas--;
    }
    tr.innerHTML="Realizadas: " + conteoTareasTareasRealizadas;
};

// eliminar

function EliminarTarea(ElementoCruz,idElementoArreglo){

    tareasIniciales = tareasIniciales.filter(function(e){
         return e.id != idElementoArreglo;
     })
 
     refrescar();
     
 };
*/

//Función de refrescar
function refrescar(){
    
    //Inicio de tabla en blanco
    tareasIniciales.innerHTML = '';

    //Creación de primeras partes de la tabla
    let filaInicial = document.createElement('tr');
    let celda1Inicial = document.createElement('th');
    let celda2Inicial = document.createElement('th');

    //Imprimir texto destacado de la tabla
    celda1Inicial.innerHTML="ID";
    celda2Inicial.innerHTML="Tarea";

    //appendChild
    tablaTotales.appendChild(filaInicial);
    filaInicial.appendChild(celda1Inicial);
    filaInicial.appendChild(celda2Inicial);


    //Ciclo for para recorrer array e imprimir tareas
    for (let x of tareasIniciales){
        
        let fila = document.createElement('tr');
        let celda1 = document.createElement('td');
        let celda2 = document.createElement('td');
        

        let check = document.createElement('input')
        check.setAttribute("type","checkbox");
        check.setAttribute("onchange","conteoTareasRealizadas(this)");
       
        let cruz = document.createElement('button');
        cruz.innerHTML = "&#10060;"
        cruz.setAttribute("onclick","EliminarTarea(this,"+x.id+")");
        cruz.setAttribute("class","btn btn-without-border");
        
        

        celda1.innerHTML=x.id;
        celda2.innerHTML=x.nombre;

        tablaTotales.appendChild(fila);
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(check);
        fila.appendChild(cruz);
        
    }

    totalResultado.innerHTML="Total: " + tareasIniciales.length;

};

//Función para iniciar pantalla
window.addEventListener("load", function(){
    refrescar();
});