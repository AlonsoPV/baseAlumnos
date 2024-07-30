class Alumno {
    constructor(matricula, nombre, apellidos, edad) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = [];
    }

    agregarAlumno() {

        listaMatricula.push(this.matricula);
        listaNombre.push(this.nombre);
        listaApellidos.push(this.apellidos);
        listaEdad.push(this.edad);
        listaMateria.push(this.materias);

        const tabla = document.getElementById('tablaAlumnos').getElementsByTagName('tbody')[0];
        const nuevaFila = tabla.insertRow();

        const celdaMatricula = nuevaFila.insertCell(0);
        const celdaNombre = nuevaFila.insertCell(1);
        const celdaApellido = nuevaFila.insertCell(2);
        const celdaEdad = nuevaFila.insertCell(3);
        const celdaMateria = nuevaFila.insertCell(4);


        celdaMatricula.textContent = this.matricula;
        celdaNombre.textContent = this.nombre;
        celdaApellido.textContent = this.apellidos;
        celdaEdad.textContent = this.edad;
        celdaMateria.textContent = this.materias.map(m => `${m.materia}: ${m.calificacion}`).join(', ');

        console.log(listaMatricula);
        console.log(listaNombre);
        console.log(listaApellidos);
        console.log(listaEdad);
        console.log(listaMateria);
        document.getElementById("mensajeAlerta").innerHTML = "Alumno inscrito.";


    }

    buscarAlumno(matriculaB) {
        console.log("--------------------------BUSQUEDA--------------------");
        console.log(listaMatricula);
        console.log(matriculaB);

        let encontrado = false;
        let indexEncontrado = -1;
    
        for (let index = 0; index < listaMatricula.length; index++) {
            if (matriculaB === listaMatricula[index]) {
                encontrado = true;
                indexEncontrado = index;
                break;
            }
        }

        
            if (encontrado) {
                console.log("Se encuentra");
                document.getElementById("mensajeAlertaBusqueda").innerHTML = "Alumno Encontrado.";
                document.getElementById("nombreAlumnoBusqueda").innerHTML = `Nombre:  ${listaNombre[indexEncontrado]}`;
                document.getElementById("apellidoAlumnoBusqueda").innerHTML = `Apellido: ${listaApellidos[indexEncontrado]}`;
                document.getElementById("edadAlumnoBusqueda").innerHTML = `Edad: ${listaEdad[indexEncontrado]}`;
                document.getElementById("materiaAlumnoBusqueda").innerHTML = `Materias: ${listaMateria[indexEncontrado].map(m => `Materia: ${m.materia}. Calificaión: ${m.calificacion}`).join(', ')}`;

            } else {
                document.getElementById("mensajeAlertaBusqueda").innerHTML = 'Matrícula no encontrada';
                document.getElementById("mensajeAlertaBusqueda").innerHTML = '';
                document.getElementById("nombreAlumnoBusqueda").innerHTML = '';
                document.getElementById("apellidoAlumnoBusqueda").innerHTML = '';
                document.getElementById("edadAlumnoBusqueda").innerHTML = '';
                document.getElementById("materiaAlumnoBusqueda").innerHTML = '';
            }

        
    }

    agregarMateria(materia, calificacion) {
        this.materias.push({ materia: materia, calificacion: calificacion });
    }



}

let nuevoAlumno = null;
const listaAlumnos = [];
const listaMatricula = [];
const listaNombre = [];
const listaApellidos = [];
const listaEdad = [];
const listaMateria = [];


function buscarMatricula() {

    matriculaB = document.getElementById("matriculaAlumnoBUS").value;
    nuevoAlumno.buscarAlumno(matriculaB);
}

function inscribirAlumno() {
    const matricula = document.getElementById("matriculaAlumno").value;
    const nombre = document.getElementById('nombreAlumno').value;
    const apellidos = document.getElementById('apellidoAlumno').value;
    const edad = parseInt(document.getElementById('edadAlumno').value, 10);
    const materia = document.getElementById("tiraMateriasAlumno").value;
    const calificacion = document.getElementById("tiraCalificacionAlumno").value;

    nuevoAlumno = new Alumno(matricula, nombre, apellidos, edad);
    nuevoAlumno.agregarMateria(materia, calificacion);

    if (listaMatricula.includes(matricula)) {
        document.getElementById("mensajeAlerta").innerHTML = "El alumno ya está inscrito. Revise matrícula o datos.";
        return;
    }
    nuevoAlumno.agregarAlumno();
    console.log(listaMatricula)
    return nuevoAlumno;
}

var i = 0;
function inscribirMateria() {
   
    const tabla = document.getElementById('materiasDIV').getElementsByTagName('tbody')[0];
    const nuevaFila = tabla.insertRow();

    const celdaMatricula = nuevaFila.insertCell(0);
    const celdaNombre = nuevaFila.insertCell(1);

    var materias = `<input type="text" id="tiraMateriasAlumno${i}" placeholder="Materia">`;
    var calificaciones = `<input type="number" id="tiraCalificacionAlumno" placeholder="Calificación" class="calificacionInput">`;
    
    celdaMatricula.innerHTML = materias;
    celdaNombre.innerHTML = calificaciones;
i++;
}

