// JavaScript source code
function removeFilter() {
    var cards = document.getElementsByClassName("feature col");
    var totalCards = cards.length;
    for (var i = 0; i <= totalCards - 1; i++) {
        cards[i].getElementsByTagName("strong")[0].parentElement.style.display = "block";
    }
}
function typeFilter(typeName) {
    removeFilter();
    var cards = document.getElementsByClassName("feature col");
    var totalCards = cards.length;
    for (var i = 0; i <= totalCards - 1; i++) {
        if (cards[i].getElementsByTagName("strong")[0].textContent !== typeName) {
            cards[i].getElementsByTagName("strong")[0].parentElement.style.display = "none";
        }
    }
}
