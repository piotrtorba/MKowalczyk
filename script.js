var acc = document.getElementsByClassName("wizualizacje");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var visual = this.nextElementSibling;
        if (visual.style.display === "block") {
            visual.style.display = "none";
        } else {
            visual.style.display = "block";
        }
    }
}

var acc = document.getElementsByClassName("modele");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");

        var models = this.nextElementSibling;
        if (models.style.display === "block") {
            models.style.display = "none";
        } else {
            models.style.display = "block";
        }
    }
}