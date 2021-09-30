define(["require", "exports", "jquery"], function (require, exports, jquery) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $ = jquery;
    //jquery
    (function () {
        var forms = document.querySelectorAll('.needs-validation');
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    })();
    //DECLARACIONES
    //antecedentes
    var antecedentes = Array();
    var inputAntecedentes = Array();
    var largoAntecedentes = Array();
    var pattern = Array();
    //Lenguajes
    var lenguajes = Array();
    //nivel Experiencia
    var nivel = Array();
    //nivel Conocimiento
    var nivelConocimiento = Array();
    // Cursos Dificultad
    var CursosDificultad = Array();
    //antecedentes
    antecedentes = ["Nombre Completo", "RUT", "Correo Electrónico", "Teléfono Móvil"];
    inputAntecedentes = ["text", "text", "email", "number"];
    largoAntecedentes = [60, 9, 60, 9];
    pattern = ["[A-Za-z]+", "[0-9k-kK-K]+", "[a-zA-z@.]+", "[0-9]+"];
    //Lenguajes
    lenguajes = ["Python", "TypeScript", "C++", "PHP", "Ruby On Rails", "Java", "R", "Groovy", "Go", "Swift", "Kotlin"];
    //nivel Experiencia
    nivel = ["Alto", "Medio", "Bajo"];
    //nivel Conocimiento
    nivelConocimiento = ["Python", "Java", "C++"];
    // Cursos Dificultad
    CursosDificultad = ["Estructura de datos ", "Inteligencia Artificial", "Interacción Humano-Computador", "Sistema Operativo", "Otro <input class=form-label type= textarea id=dificultad maxlength='500'>"];
    function ConstruirAntecedentes() {
        var formu = document.getElementById("antecedentes");
        for (var i = 0; i < antecedentes.length; i++) {
            var li = document.createElement("li");
            formu.appendChild(li).innerHTML = "<label for= " + antecedentes[i] + "  class= form-label> " + antecedentes[i] + "</label><input type="
                + inputAntecedentes[i] + "class=form-control pattern=" + pattern[i] + " id=" + antecedentes[i] +
                " maxlength=" + largoAntecedentes[i] + " required> <div class= valid-feedback>" + antecedentes[i] + " Correcto</div><div class= invalid-feedback>Ingrese " + antecedentes[i] + " Valido</div>";
        }
    }
    window.addEventListener("load", ConstruirAntecedentes);
    function ConstruirSeleccionLenguajes() {
        var lengua = document.getElementById("seleccionLenguajes");
        var div = document.createElement("div");
        lengua.appendChild(div).textContent = "Seleccionar uno o más lenguajes de programación de un interés";
        for (var i = 0; i < lenguajes.length; i++) {
            var li = document.createElement("li");
            lengua.appendChild(li).innerHTML = "<input class=form-check-input type= checkbox id=lenguajes > " +
                lenguajes[i] + "";
        }
    }
    $('form').submit(function (e) {
        if ($('#lenguajes:checked').length === 0) {
            e.preventDefault();
            alert('Debe seleccionar al menos un lenguaje de programacion');
        }
    });
    window.addEventListener("load", ConstruirSeleccionLenguajes);
    function ConstruirNivelExperiencia() {
        var experience = document.getElementById("nivelExperiencia");
        var div = document.createElement("div");
        experience.appendChild(div).textContent = "¿Cúal es su nivel de experiencia en programación?";
        for (var i = 0; i < nivel.length; i++) {
            var li = document.createElement("li");
            experience.appendChild(li).innerHTML = "<input type= radio class=form-check-input id=" +
                nivel[i] + " name=nivel required><label class=form-check-label for=" + nivel[i] + ">" +
                nivel[i] + "</label><div class=invalid-feedback >Selecciones su nivel de experiencia</div>";
        }
    }
    window.addEventListener("load", ConstruirNivelExperiencia);
    function ConstruirNivelLenguaje() {
        var nivelLengua = document.getElementById("nivelConocimiento");
        var div = document.createElement("div");
        nivelLengua.appendChild(div).textContent = "Nivel de conocimiento sobre los siguientes lenguajes de programación";
        for (var i = 0; i < nivel.length; i++) {
            var li = document.createElement("li");
            nivelLengua.appendChild(li).innerHTML = "<label for=range class=form-label>" + nivelConocimiento[i] + "</label><input type= range class=form-range id=range min=0 max=100 step=10 value=0 required>";
        }
    }
    window.addEventListener("load", ConstruirNivelLenguaje);
    function ConstruirCursosDificultad() {
        var cuDificultad = document.getElementById("CursosDificultad");
        var div = document.createElement("div");
        cuDificultad.appendChild(div).textContent = "Seleccione cúal de los siguientes cursos les ha tomado mayor dificultad.";
        for (var i = 0; i < CursosDificultad.length; i++) {
            var li = document.createElement("li");
            cuDificultad.appendChild(li).innerHTML = "<input class=form-check-input type= checkbox id=dificultad > " + CursosDificultad[i] + "";
        }
    }
    $('form').submit(function (e) {
        if ($('#dificultad:checked').length === 0) {
            e.preventDefault();
            alert('Debe seleccionar al menos un Curso que le tomara mas dificultad');
        }
    });
    window.addEventListener("load", ConstruirCursosDificultad);
    function ConstruirCuadroOpinion() {
        var cuadro = document.getElementById("cuadroOpinion");
        var area = document.createElement("div");
        cuadro.appendChild(area).innerHTML = "<label for=area class=form-label >Queremos conocer su opinión acerca de la escuela</label> <textarea class=form-control is-invalid id=area maxlength='500' required></textarea><div class=invalid-feedback> Ingrese un Comentario </div>";
    }
    window.addEventListener("load", ConstruirCuadroOpinion);
    function botones() {
        var div = document.getElementById("botones");
        var enviar = document.createElement("div");
        var cancelar = document.createElement("div");
        div.appendChild(enviar).innerHTML = "<button class= 'btn btn-primary' type= submit id=enviar> Enviar</button> ";
        div.appendChild(cancelar).innerHTML = "<button class= 'btn btn-primary' type= 'reset' id=cancelar> Cancelar</button> ";
    }
    window.addEventListener("load", botones);
});
