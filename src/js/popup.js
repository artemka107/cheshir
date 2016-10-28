var card = document.querySelectorAll(".card");
var i;
var popup = document.querySelector(".popup");
var close = document.querySelector(".popup__btn-close");
var popupTitle = document.querySelector(".popup__about-title");
var popupPrice = document.querySelector(".popup__table-price");

for (i = 0; i < card.length; i++) {
  card[i].querySelector(".btn--cart").onclick = function(event) {
    event.preventDefault();
    var card = event.target;
    var cardParent = card.parentElement;
    var cardItem = cardParent.parentElement;
    var cardTitle = cardItem.querySelector(".card__title-link");
    var cardPrice = cardItem.querySelector(".card__price");
    popupTitle.innerHTML = cardTitle.textContent;
    popupPrice.innerHTML = cardPrice.textContent;
    popup.classList.toggle("popup--show");
  }
}

close.addEventListener("click", function() {
  popup.classList.remove("popup--show");
})
