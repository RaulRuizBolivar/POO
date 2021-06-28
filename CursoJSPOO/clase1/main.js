const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
  "Curso Definitivo HTML y CSS",
  "Curso Práctico HTML y CSS"
  ],
  aprobarCurso( nuevoCursito ) {
    this.cursosAprobados.push( nuevoCursito );
  }
};

function Student ( name , age , cursosAprobados ) {
  this.name            = name;
  this.age             = age;
  this.cursosAprobados = cursosAprobados;
  /*this.aprobarCurso    = function ( nuevoCursito ) {
    this.cursosAprobados.push( nuevoCursito );
  }*/
}
Student.prototype.aprobarCurso = function ( nuevoCursito ) {
  this.cursosAprobados.push( nuevoCursito );
}

const juanita = new Student("Juanita Alejandra", 15, ["Curso de introducción ade Videojuegos","Curso de creación de personajes"]);
juanita.aprobarCurso( "Curso de Unreal Engine" );



// Prototipos con sintaxis de clases
