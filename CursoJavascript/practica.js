function tunombre(name,lastname,nickname){

    var completeName = name + " " + lastname;
    console.log(`Mi nombre es ${completeName}, pero prefiero que me digas ${nickname}`);
}

tunombre('Matias','Rivarola',)


var tipoDeSuscripcion = ['Free',"Basic",'Expert','ExpertDuo'];

if (tipoDeSuscripcion === "Free"){
    console.log("Solo puedes tomar los cursos gratis");
}
else if (tipoDeSuscripcion ==="Basic"){
    console.log("Puedes tomar casi todos los cursos de platzi");
}
else if (tipoDeSuscripcion === "Expert"){
    console.log("Puedes tomar casi todos los cursos de platzi");
}
else if(tipoDeSuscripcion ==="ExpertDuo"){
    console.log("Tu y alguien mas pueden tomar TODOS los cursos de platzi");
}


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

var i =0
while (i < 5) {
    console.log('El valor de i es ' + i)
    i++
}

var otro =10
while (otro >= 2 ) {
    console.log('El valor de otro es ' + otro)
    otro--
}

