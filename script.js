class Alumno {
    constructor(matricula, nombre, apellidos, edad) {
        this.matricula = matricula;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.materias = [];

    }

    
//objeto de alumnos con las propiedades


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
        for (let index = 0; index < listaMatricula.length; index++) {
            if (matriculaB === listaMatricula[index]) {
                console.log("Se encuentra");
                var a = listaNombre[index];
                document.getElementById("mensajeAlertaBusqueda").innerHTML = "Alumno Encontrado.";
                document.getElementById("nombreAlumnoBusqueda").innerHTML = `Nombre:  ${listaNombre[index]}`;
                document.getElementById("apellidoAlumnoBusqueda").innerHTML = `Apellido: ${listaApellidos[index]}`;
                document.getElementById("edadAlumnoBusqueda").innerHTML = `Edad: ${listaEdad[index]}`;

            } else {
                document.getElementById("mensajeAlertaBusqueda").innerHTML = "Alumno No Encontrado.";
            }

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

    matriculaB = "A";
    nuevoAlumno.buscarAlumno(matriculaB);
}

function inscribirAlumno() {
    const matricula = document.getElementById("matriculaAlumno").value;
    const nombre = "Edgar"; //document.getElementById('nombreAlumno').value;
    const apellidos = "Perez"; //document.getElementById('apellidoAlumno').value;
    const edad = 27; //parseInt(document.getElementById('edadAlumno').value, 10);
    const materia = "Historia";// document.getElementById("materiaInput").value;
    const calificacion = 100;

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


function inscribirMateria(){
    const materia = "Historia";// document.getElementById("materiaInput").value;
    const calificacion = 100;
    nuevoAlumno = new Alumno();


}


/* 

function inscribirMateria() {
    
    const materia = "Historia";// document.getElementById("materiaInput").value;
    
        nuevoAlumno.agregarMateria(materia);

        // Actualiza la fila del alumno en la tabla con las nuevas materias
        const tabla = document.getElementById('tablaAlumnos').getElementsByTagName('tbody')[0];
        const filas = tabla.getElementsByTagName('tr');
        for (let i = 0; i < filas.length; i++) {
            const celdaMatricula = filas[i].getElementsByTagName('td')[0];
            if (celdaMatricula.textContent === nuevoAlumno.matricula) {
                const celdaMateria = filas[i].getElementsByTagName('td')[4];
                celdaMateria.textContent = nuevoAlumno.materias.join(', ');
                break;
            }
        }

        document.getElementById("materiaInput").value = ''; // Limpiar el input de materia
   
}

  */
