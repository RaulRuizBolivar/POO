class Comment {
  constructor ( {
    content,
    studentName,
    studentRole = "estudiante"
  } ) {
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    this.likes = 0;
  }
  publicar( ) {
    console.log ( this.studentName + "(" + this.studentRole + ")" ); 
    console.log ( this.likes + " Likes" );
    console.log ( this.content );
  };
}
function videoPlay( id ){
  const url = "https://platziultrasecreto.com/" + id;
  console.log("Se está reproduciendo desde la url " + url);
}
function videoStop( id ){
  const url = "https://platziultrasecreto.com/" + id;
  console.log("Pausamos la url " + url);
}
class Class {
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
class Course {
  #name ;
  #clases;
  #comments;
  constructor ( {
    name,
    clases = [],
    comments = [],
    isFree = false,
    lang = "spanish"
  } ) {
    this.#name   = name;
    this.#clases = clases;
    this.#comments = comments;
    this.isFree = isFree;
    this.lang = lang;
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
  name: "Curso de programación básica",
  isFree: true
} );
const cursoDefinitivoHTML = new Course ( {
  name: "Curso definitivo de HTML y CSS"
} );
const cursoPracticoHTML = new Course ( {
  name: "Curso Práctico de HTML y CSS",
  lang: "english"
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
  publicarComentario ( commentContent ) {
    const comments = new Comment ( {
      content: commentContent,
      studentName: this.name
    });
    comments.publicar();
  }
}
class FreeStudent extends Student {
  constructor ( propiedades ) {
    super ( propiedades );
  }
  approveCourse ( newCourse ) {
    if ( newCourse.isFree ) {
      this.approvedCourses.push ( newCourse );
    } else {
      console.warn ( "Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos " );
    }
  }
}
class BasicStudent extends Student {
  constructor ( propiedades ) {
    super ( propiedades );
  }
  approveCourse ( newCourse ) {
    if ( newCourse.lang !== "english" ) {
      this.approvedCourses.push ( newCourse );
    } else {
      console.warn ( "Lo sentimos, " + this.name + ", no puedes tomar cursos en ingleś" )
    }
  }
}
class ExpertStudent extends Student {
  constructor ( propiedades ) {
    super ( propiedades );
  }
  approveCourse ( newCourse ) {
    this.approvedCourses.push ( newCourse );
  }
}
class TeacherStudent extends Student {
  constructor ( propiedades ) {
    super ( propiedades );
  }
  approveCourse ( newCourse ) {
    this.approvedCourses.push ( newCourse );
  }
  publicarComentario ( commentContent ) {
    const comments = new Comment ( {
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor"
    });
    comments.publicar();
  }

  
}


const juan = new FreeStudent ( {
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juan.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs
  ]
} );
const miguelito = new BasicStudent ( {
  name: "Miguelito",
  username: "miguelitofeliz",
  email: "miguelito@miguel.com",
  instagram: "miguelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData
  ]
} );
const natalia = new ExpertStudent ( {
  name: "Natalia",
  username: "nataliaRe$ulon4",
  email: "tuloquita95@natalia.com",
  instagram: "nat95",
  twitter: "feminazi",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    escuelaVgs
  ]
} )
const freddy = new TeacherStudent ( {
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  twitter: "freddiervega"
} )
