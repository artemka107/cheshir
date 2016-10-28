var tog = document.querySelectorAll(".card__buy-wrap");
var i;

for (i = 0; i < tog.length; i++) {
    tog[i].onclick = function(){
        this.nextElementSibling.classList.toggle("card__table--show");
    }
}
