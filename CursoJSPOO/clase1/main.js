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
class Student2 {
  constructor ( {
    name,
    age,
    cursosAprobados = [],
    email
  } ) {
    this.name            = name;
    this.age             = age;
    this.cursosAprobados = cursosAprobados; 
  }
  aprobarCurso( nuevoCursito ) {
    this.cursosAprobados.push(nuevoCursito);
  }
}
// Al utilizar un objeto literal como parametro de la función constructora, podemos darle los valores desordenados o no darle todos. Para darle un valor por defecto, se le asigna en el objeto literal que es parámetro de la función constructora
const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelita@miguel.com",
  cursosAprobados: [
    "Curso de Análisis de negocio para ciencia de datos",
    "Curso de Principios de visualización de datos para BI"
  ]
});
