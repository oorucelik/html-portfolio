// JavaScript source code
function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}
var cards = document.getElementsByClassName("feature col");
var totalCards = cards.length;
var totalFilm = 0;
var totalDizi = 0;
for (var i = 0; i <= totalCards - 1; i++) {
    if (cards[i].getElementsByTagName("strong")[0].textContent == 'Film') {
        totalFilm = totalFilm + 1;
    } else {
        totalDizi = totalDizi + 1;
    }
}
var onloadTotalText = document.querySelector("#totalCount").textContent = "Diziler: " + totalDizi + " Filmler: " + totalFilm + " Toplam: " + (totalDizi + totalFilm);
onload(onloadTotalText);//Refresh Toplam Count.

function mouseOverCard(x) {
    console.log("mousever");
    x.parentElement.style.flex = "0";
    x.parentElement.style.color = "red";

}
function mouseOutCard(x) {
    console.log("mouseout");
    x.style.flex = "1 0 0%";
    x.parentElement.style.color = "blue";
}
for (var i = 0; i <= totalCards - 1; i++) {
    var imgObj = document.querySelectorAll(".feature.col")[i].querySelector("img")
    imgObj.addEventListener("mouseover", mouseOverCard(imgObj));
    imgObj.addEventListener("mouseleave", mouseOutCard(imgObj));
}
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

function refreshCounts() {
    var totalFilteredCards = 0;
    var selectedItemTextList = [];
    var genreTypeTxt = '';
    //Add selectedItemTexts to list.
    for (var i = 0; i <= 27; i++) {
        var listItem = document.getElementsByClassName("btn-check")[i];
        if (listItem.checked) {
            selectedItemTextList.push(listItem.labels[0].textContent);
        }
    }

    //If only Hepsi has selected, return initial count text
    if (selectedItemTextList.length == 1 && selectedItemTextList.includes("Hepsi")) {
        document.querySelector("#totalCount").textContent = onloadTotalText;
        return;
    }

    else {
        var filmler_diziler_txt = '';
        if (selectedItemTextList[0] == "Filmler") {
            filmler_diziler_txt = "Filmler";
        } else if (selectedItemTextList[0] == "Diziler") {
            filmler_diziler_txt = "Diziler";
        }
        //total of filtered cards
        for (var j = 0; j <= (document.getElementsByClassName("feature col").length - 1); j++) {
            var card = document.getElementsByClassName("feature col")[j];
            if (card.style.display == "block") {
                totalFilteredCards = totalFilteredCards + 1;
            }
        }



        for (var j = 0; j <= selectedItemTextList.length - 1; j++) {

            //not last item and not film or dizi
            if (j != (selectedItemTextList.length - 1) && selectedItemTextList[j] != "Filmler" && selectedItemTextList[j] != "Diziler" && selectedItemTextList[j] != "Hepsi") {
                genreTypeTxt = genreTypeTxt + selectedItemTextList[j] + ", ";
            }
            //last item
            else if (j == (selectedItemTextList.length - 1) && selectedItemTextList[j] != "Hepsi") {
                genreTypeTxt = genreTypeTxt + selectedItemTextList[j] + " ";
            }
        }
        if (selectedItemTextList.includes("Filmler") && selectedItemTextList.length > 1) {//If not only Filmler has selected
            document.querySelector("#totalCount").textContent = genreTypeTxt + "Filmler: " + totalFilteredCards;
        } else if (selectedItemTextList.includes("Diziler") && selectedItemTextList.length > 1) {//If not only Diziler has selected
            document.querySelector("#totalCount").textContent = genreTypeTxt + "Diziler: " + totalFilteredCards;
        } else if (selectedItemTextList.includes("Diziler") && selectedItemTextList.length == 1) {//If only Diziler has selected
            document.querySelector("#totalCount").textContent = "Diziler: " + totalFilteredCards;
        } else if (selectedItemTextList.includes("Filmler") && selectedItemTextList.length == 1) {//If only Filmler has selected
            document.querySelector("#totalCount").textContent = "Filmler: " + totalFilteredCards;
        } else if (selectedItemTextList.includes("Hepsi") && selectedItemTextList.length > 1) {//If not only Hepsi has selected
            document.querySelector("#totalCount").textContent = genreTypeTxt + "Diziler ve Filmler: " + totalFilteredCards;
        }
    }
}
//Add eventListener:
//document.querySelector("button").addEventListener("click",function);
//Türler string
//document.getElementsByClassName("feature col")[0].getElementsByTagName("p")[2].textContent.slice(5)
//first Tür
//document.getElementsByClassName("feature col")[0].getElementsByTagName("p")[2].textContent.slice(5).split(", ")[0]
