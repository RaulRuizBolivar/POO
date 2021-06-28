/*const juan1 = {
  name: "JuanDC",
  username: "juandc",
  points: 100,
  socialMedia: {
    twitter: "fjuandc",
    instagram: "fjuandc",
    facebook: undefined
  },
  approvedCourses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design"
      ]
    },
    {
      name: "Escuela de Videojuegos",
      courses: [
        "Curso de Introducción a la Producción de Videojuegos",
        "Curso de Unreal Engine",
        "Curso de Unity 3D"
      ]
    }
  ]
};
const miguelito1 = {
  name: "Miguelito",
  username: "miguelitofeliz",
  points: 1000,
  socialMedia: {
    twitter: "miguelitofeliz",
    instagram: "miguelito_feliz",
    facebook: undefined
  },
  approvedCourses: [
    "Curso de DataBusiness",
    "Curso de DataViz"
  ],
  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: [
        "Curso Definitivo de HTML y CSS",
        "Curso Práctico de HTML y CSS",
        "Curso de Responsive Design"
      ]
    },
    {
      name: "Escuela de Data Science",
      courses: [
        "Curso de DataBusiness",
        "Curso de DataViz",
        "Curso de Tableau"
      ]
    }
  ]
};*/
class LearningPath {
  constructor ( {
    name,
    courses = []
  } ) {
    this.name = name;
    this.courses = courses;
    }
    crearCurso ( nuevoCurso ) {
      this.courses.push( nuevoCurso );
    };
}
class Student {
  constructor ( {
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = []
  } ) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}
const escuelaWeb = new LearningPath( {
  name: "Escuela de desarrollo web",
  courses: [
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
    "Curso de Responsive Design"
  ]
} );
const escuelaVgs = new LearningPath( {
  name: "Escuela de desarrollo de videojuegos",
  courses: [
    "Curso de Introducción a la Producción de Videojuegos",
    "Curso de Unreal Engine",
    "Curso de Unity 3D"
  ]
} );
const escuelaData = new LearningPath( {
  name: "Escuela de Data Science",
  courses: [
    "Curso de DataBusiness",
    "Curso de DataViz",
    "Curso de Tableau"
  ]
} );
const juan2 = new Student ( {
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juan.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]
} );
const miguelito2 = new Student ( {
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@miguel.com",
  instagram: "miguelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]
} );
