// JavaScript source code
//Hepsi Button//Display All Cards
function removeFilter() {
    var cards = document.getElementsByClassName("feature col");
    var totalCards = cards.length;
    for (var i = 0; i <= totalCards - 1; i++) {
        cards[i].style.display = "block";
    }
}
//Dizi/Film Button//Hide the Non-Selected Type
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

function removeGenreFilter() {
    removeFilter();
    for (var i = 3; i <= 27; i++) {
        document.getElementsByClassName("btn-check")[i].checked = false;
    }
}

function genreFilter() {
    
    var cards = document.getElementsByClassName("feature col");
    var totalCards = cards.length;
    var selectedGenres = [];
    for (var i = 3; i <= 27; i++) {//check each genres and add to selectedGenres
        var genreItem = document.getElementsByClassName("btn-check")[i];
        if (genreItem.checked==true) {
            selectedGenres.push(genreItem.labels[0].textContent);
        }
    }
    var selectedGenresLength = selectedGenres.length;
    for (var i = 0; i <= totalCards - 1; i++) {
        var cardGenres = cards[i].getElementsByTagName("p")[2].innerText.slice(5).split(", ");
        
        for (var j = 0; j <= selectedGenresLength-1; j++) {
            if (cardGenres.includes(selectedGenres[j]) == false) {
                cards[i].style.display = "none";
            }
        }
    }
}

//Add eventListener:
//document.querySelector("button").addEventListener("click",function);
//Türler string
//document.getElementsByClassName("feature col")[0].getElementsByTagName("p")[2].textContent.slice(5)
//first Tür
//document.getElementsByClassName("feature col")[0].getElementsByTagName("p")[2].textContent.slice(5).split(", ")[0]

