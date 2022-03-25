function runPage(id) {
    sessionStorage.setItem("page", id);
    window.open("../HTML/Campus-Page.html", "_self")
}

window.addEventListener("load", function() {
    var Cards = document.querySelectorAll(".Campus");
    Cards.forEach(function(element, index, arr) {
        element.addEventListener("click", function() {
            runPage(arr[index].id);
        });
    });
});