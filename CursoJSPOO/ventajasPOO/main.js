class Class {
  constructor ( {
    name,
    comments = [],
    questions = [],
    resources = [],
    relatedClasses = [],
    nextClass,
    pastClass
  } ) {
    this.name = name;
    this.comments = comments;
    this.questions = questions;
    this.resources = resources;
    this.relatedClasses = relatedClasses;
    this.nextClass = nextClass;
    this.pastClass = pastClass;
  }
};
class Course {
  constructor ( {
    name,
    clases = [],
    comments = []
  } ) {
    this.name   = name;
    this.clases = clases;
    this.comments = comments;
  }
}
const cursoProgramaciónBasica = new Course ( {
  name: "Curso de programación básica"
} );
const cursoDefinitivoHTML = new Course ( {
  name: "Curso definitivo de HTML y CSS"
} );
const cursoPracticoHTML = new Course ( {
  name: "Curso Práctico de HTML y CSS"
} );
const cursoResponsiveDesign = new Course ( {
  name: "Curso de Responsive Design"
} );
const cursoIntroduccionVgs = new Course ( {
  name: "Curso de Introducción a la producción de videojuegos"
} );
const cursoUnreal = new Course ( {
  name: "Curso de Unreal Engine"
} );
const cursoUnity = new Course ( {
  name: "Curso de Unity 3D"
} );
const cursoDataBusiness = new Course ( {
  name: "Curso de DataBusiness"
} );
const cursoDataViz = new Course ( {
  name: "Curso de DataViz"
} );
const cursoTableau = new Course ( {
  name: "Curso de Tableau"
} );


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
const escuelaWeb = new LearningPath( {
  name: "Escuela de desarrollo web",
  courses: [
    cursoProgramaciónBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
    cursoResponsiveDesign
  ]
} );
const escuelaVgs = new LearningPath( {
  name: "Escuela de desarrollo de videojuegos",
  courses: [
    cursoProgramaciónBasica,
    cursoIntroduccionVgs,
    cursoUnity,
    cursoUnreal
  ]
} );
const escuelaData = new LearningPath( {
  name: "Escuela de Data Science",
  courses: [
    cursoProgramaciónBasica,
    cursoDataBusiness,
    cursoDataViz,
    cursoTableau
  ]
} );
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
