function Aprobacion(nota) {
    if (nota >= 11 && nota <= 20) {
        console.log ("Estas aprobado");
    }else if (nota >= 0 && nota < 11){
        console.log ("Estas desaprobado");
    } else {
        console.log ("La nota debe estar entre 0-20");
    }
    
}

let notaEvaluacion = 10;
Aprobacion(notaEvaluacion)