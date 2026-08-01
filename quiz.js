const botones = document.querySelectorAll(".answer");

botones.forEach(boton => {

    boton.addEventListener("click", function(){

        if(this.dataset.correct === "true"){

            alert("¡Correcto! +10 XP");

        }else{

            alert("Incorrecto. Inténtalo otra vez.");

        }

    });

});