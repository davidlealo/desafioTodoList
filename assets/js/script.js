//Variables para imprimir resultados en el DOM
let totalResultado = document.querySelector('#total-resultado');
let totalRealizadas = document.querySelector('#total-realizadas');
let botonAgregar = document.querySelector('#buttonAgregar');
let tablaTotales = document.querySelector('#tablaTotales');
let tablaRealizadas = document.querySelector('#tablaRealizadas');
let tablaVaciaTareas = document.querySelector('#mensaje-vacio-tareas');
let tablaVaciaRealizadas = document.querySelector('#mensaje-vacio-realizadas');


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
let tareasRealizadas = [{
    id: 1,
    nombre: 'Enviar desafío semanal'
}];



//Agregar nueva tarea

botonAgregar.addEventListener("click",function(){
    

    let valorInput = document.querySelector('#textCajaAgregar');

    if (valorInput.value==""){
        alert("Debe escribir una tarea nueva oara usar el botón 'Agregar'");
    }
    else{

        let tareaNueva = {
            id: tareasIniciales.length+1,
            nombre:  valorInput.value
        };
       
        tareasIniciales.push(tareaNueva);
        refrescar();
        valorInput.value = "";
    }
});

function refrescar(){
    refrescarTareas();
    refrescarRealizadas();
};



// checkbox paso a tareas realizadas
function conteoTareasRealizadas(v){
   
    let textoNombre = v.previousSibling.innerHTML

    if (v.value.checked = true){
        var tareaNuevacheckbox = {
            id: tareasRealizadas.length+1,
            nombre:  textoNombre
        };
    }
    tareasRealizadas.push(tareaNuevacheckbox);
    eliminarTarea();
    refrescar();
};

// check paso desde tareas realizadas a tareas
function restaurarTarea(v){
   
    let textoNombre = v.previousSibling.innerHTML

    if (v.value.checked = true){
        var retornarTareaNuevacheckbox = {
            id: tareasIniciales.length+1,
            nombre:  textoNombre
        };
    }
    tareasIniciales.push(retornarTareaNuevacheckbox);
    eliminarRealizada();
    refrescar();
};

//Eliminar tarea
function eliminarTarea(id){
    const index = tareasIniciales.findIndex((ele) => ele.id == id)
    tareasIniciales.splice(index, 1)
    refrescarTareas()
    if (tareasIniciales.length === 0) {
        tablaVaciaTareas.style.display = "block";
      }
};

//Eliminar realizada
function eliminarRealizada(id){
    const index = tareasRealizadas.findIndex((ele) => ele.id == id)
    tareasRealizadas.splice(index, 1)
    refrescarRealizadas()
    if (tareasRealizadas.length === 0) {
        tablaVaciaRealizadas.style.display = "block";
      }
};

//Función de refrescar tareas
function refrescarTareas(){
    
    //Inicio de tabla en blanco
    tablaTotales.innerHTML = "";

    //Creación de primeras partes de la tabla de tareas
    let filaInicial = document.createElement('tr');
    let celda1Inicial = document.createElement('th');
    let celda2Inicial = document.createElement('th');


    //Imprimir texto destacado de la tabla de tareas
    celda1Inicial.innerHTML="ID";
    celda2Inicial.innerHTML="Tarea";


    //appendChild tareas
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
        cruz.setAttribute("onclick","eliminarTarea(this,"+x.id+")");
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


function refrescarRealizadas(){
    //Inicio de tareas realizadas en clanco
    tablaRealizadas.innerHTML = '';

    //Creación de primeras partes de la tabla de realizadas
    let filaRealizadas = document.createElement('tr');
    let celda1Realizadas = document.createElement('th');
    let celda2Realizadas = document.createElement('th');

    //Imprimir texto destacado de la tabla de tareas realizadas
    celda1Realizadas.innerHTML="ID";
    celda2Realizadas.innerHTML="Tarea";

    //appendChild tareas realizadas
    tablaRealizadas.appendChild(filaRealizadas);
    filaRealizadas.appendChild(celda1Realizadas);
    filaRealizadas.appendChild(celda2Realizadas);

    //Ciclo for para recorrer array e imprimir tareas realizadas
    for (let x of tareasRealizadas){
        
        let fila = document.createElement('tr');
        let celda1 = document.createElement('td');
        celda1.setAttribute("class","text-decoration-line-through");
        let celda2 = document.createElement('td');
        celda2.setAttribute("class","text-decoration-line-through");
        
       
        let ticket = document.createElement('button');
        ticket.innerHTML = "&#8634;"
        ticket.setAttribute("onclick","restaurarTarea(this,"+x.id+")");
        ticket.setAttribute("class","btn btn-without-border");


        let cruz = document.createElement('button');
        cruz.innerHTML = "&#10060;"
        cruz.setAttribute("onclick","eliminarRealizada(this,"+x.id+")");
        cruz.setAttribute("class","btn btn-without-border");

        
        

        celda1.innerHTML=x.id;
        celda2.innerHTML=x.nombre;

        tablaRealizadas.appendChild(fila);
        fila.appendChild(celda1);
        fila.appendChild(celda2);
        fila.appendChild(ticket);
        fila.appendChild(cruz);

        
    }

    totalRealizadas.innerHTML="Realizadas: " + tareasRealizadas.length;

};


//Función para iniciar pantalla
window.addEventListener("load", function(){
    refrescar();
});