function videoPlay( id ){
  const url = "https://platziultrasecreto.com/" + id;
  console.log("Se está reproduciendo desde la url " + url);
}
function videoStop( id ){
  const url = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + url);
}
 export class Class {
  constructor ( {
    name,
    videoID,
    comments = [],
    questions = [],
    resources = [],
    relatedClasses = [],
    nextClass,
    pastClass
  } ) {
    this.name = name;
    this.videoID = videoID;
    this.comments = comments;
    this.questions = questions;
    this.resources = resources;
    this.relatedClasses = relatedClasses;
    this.nextClass = nextClass;
    this.pastClass = pastClass;
  }
  reproducir(  ) {
    videoPlay(this.videoID);
  }
  pausar (  ) {
    videoStop(this.videoID);
  }
};
export class Course {
  #name ;
  #clases;
  #comments;
  constructor ( {
    name,
    clases = [],
    comments = []
  } ) {
    this.#name   = name;
    this.#clases = clases;
    this.#comments = comments;
  }
  get name(  ) {
    return this.#name;
  }
  get clases (  ) {
    return this.#clases;
  }
  get comments (  ) {
    return this.#comments;
  }
  set name ( newName ) {
    if( newName === "Curso Malito de programación básica" ) {
      console.error("Wey... no");
    }else{
      this.#name = newName;
    }
  }
  set clases ( newClass ) {
    this.clases.push( newClass );
  }
  set comments ( newComment ) {
    this.comments.push( newComment );
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


export class LearningPath {
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
export class Student {
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
