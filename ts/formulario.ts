import jquery = require("jquery");

const $: JQueryStatic=jquery;

//jquery
(function () {
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event:any) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
          form.classList.add('was-validated')
        }, false)
      })
  })()

//DECLARACIONES
//antecedentes
let antecedentes= Array<string>();
let inputAntecedentes= Array<string>();
let largoAntecedentes= Array<number>();
let pattern=Array<string>();
//Lenguajes
let lenguajes= Array<string>();
//nivel Experiencia
let nivel= Array<string>();
//nivel Conocimiento
let nivelConocimiento= Array<string>();
// Cursos Dificultad
let CursosDificultad= Array<string>();

//antecedentes
antecedentes = [ "Nombre Completo", "RUT", "Correo Electrónico","Teléfono Móvil"]
inputAntecedentes=["text", "text","email","number"]
largoAntecedentes=[60,9,60,9];
pattern=["[A-Za-z]+","[0-9k-kK-K]+","[a-zA-z@.]+","[0-9]+"];
//Lenguajes

lenguajes=["Python","TypeScript","C++","PHP","Ruby On Rails","Java","R","Groovy","Go","Swift","Kotlin"]

//nivel Experiencia
 nivel= ["Alto","Medio","Bajo"]

//nivel Conocimiento
nivelConocimiento= ["Python","Java","C++"]

// Cursos Dificultad
CursosDificultad= ["Estructura de datos ","Inteligencia Artificial","Interacción Humano-Computador","Sistema Operativo","Otro <input class=form-label type= textarea id=dificultad maxlength='500'>"];

function ConstruirAntecedentes(){
    let formu:any=document.getElementById("antecedentes");
    for(let i=0; i<antecedentes.length;i++){
        let li:any = document.createElement("li");
        formu.appendChild(li).innerHTML="<label for= "+antecedentes[i] +"  class= form-label> "+antecedentes[i]+"</label><input type="
        +inputAntecedentes[i] +"class=form-control pattern="+pattern[i] +" id="+antecedentes[i] +
        " maxlength="+largoAntecedentes[i] +" required> <div class= valid-feedback>"+antecedentes[i]+" Correcto</div><div class= invalid-feedback>Ingrese "+antecedentes[i]+" Valido</div>";
    }
    

}

window.addEventListener("load",ConstruirAntecedentes);

function ConstruirSeleccionLenguajes(){
    let lengua:any=document.getElementById("seleccionLenguajes");
    let div:any=document.createElement("div");
    lengua.appendChild(div).textContent="Seleccionar uno o más lenguajes de programación de un interés";
    for(let i=0; i<lenguajes.length;i++){
        let li:any = document.createElement("li");
        lengua.appendChild(li).innerHTML= "<input class=form-check-input type= checkbox id=lenguajes > "+
         lenguajes[i]+"";    
    }
    

}
$('form').submit(function(e){//funcion para validar checkbox
    if ($('#lenguajes:checked').length === 0) {
        e.preventDefault();
        alert('Debe seleccionar al menos un lenguaje de programacion');
    }
});
window.addEventListener("load",ConstruirSeleccionLenguajes);

function ConstruirNivelExperiencia(){
    let experience:any=document.getElementById("nivelExperiencia");
    let div:any=document.createElement("div");
    experience.appendChild(div).textContent="¿Cúal es su nivel de experiencia en programación?" 
    for(let i=0; i<nivel.length;i++){
        let li:any = document.createElement("li");
        experience.appendChild(li).innerHTML="<input type= radio class=form-check-input id="+
        nivel[i] +" name=nivel required><label class=form-check-label for="+nivel[i]+ ">"+
        nivel[i] +"</label><div class=invalid-feedback >Selecciones su nivel de experiencia</div>";    
    }    
}

window.addEventListener("load",ConstruirNivelExperiencia);


function ConstruirNivelLenguaje(){
    let nivelLengua:any=document.getElementById("nivelConocimiento");
    let div:any=document.createElement("div");
    nivelLengua.appendChild(div).textContent="Nivel de conocimiento sobre los siguientes lenguajes de programación" 
    for(let i=0; i<nivel.length;i++){
        let li:any = document.createElement("li");
        nivelLengua.appendChild(li).innerHTML="<label for=range class=form-label>"+nivelConocimiento[i] +"</label><input type= range class=form-range id=range min=0 max=100 step=10 value=0 required>";    
    }    
}

window.addEventListener("load",ConstruirNivelLenguaje);

function ConstruirCursosDificultad(){
    let cuDificultad:any=document.getElementById("CursosDificultad");
    let div:any=document.createElement("div");
    cuDificultad.appendChild(div).textContent="Seleccione cúal de los siguientes cursos les ha tomado mayor dificultad." 
    for(let i=0; i<CursosDificultad.length;i++){
        let li:any = document.createElement("li");
        cuDificultad.appendChild(li).innerHTML="<input class=form-check-input type= checkbox id=dificultad > "+CursosDificultad[i] +"";    
    }
}
$('form').submit(function(e){ //funcion para validar checkbox
    if ($('#dificultad:checked').length === 0) {
        e.preventDefault();
        alert('Debe seleccionar al menos un Curso que le tomara mas dificultad');
    }
});


window.addEventListener("load",ConstruirCursosDificultad);

function ConstruirCuadroOpinion(){
    let cuadro:any=document.getElementById("cuadroOpinion");
    let area:any=document.createElement("div");
    cuadro.appendChild(area).innerHTML="<label for=area class=form-label >Queremos conocer su opinión acerca de la escuela</label> <textarea class=form-control is-invalid id=area maxlength='500' required></textarea><div class=invalid-feedback> Ingrese un Comentario </div>"
}
window.addEventListener("load",ConstruirCuadroOpinion);


function botones(){
    let div:any=document.getElementById("botones");
    let enviar:any= document.createElement("div");
    let cancelar:any= document.createElement("div");
    div.appendChild(enviar).innerHTML= "<button class= 'btn btn-primary' type= submit id=enviar> Enviar</button> "
    div.appendChild(cancelar).innerHTML= "<button class= 'btn btn-primary' type= 'reset' id=cancelar> Cancelar</button> "
}
window.addEventListener("load",botones)

