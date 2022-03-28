window.addEventListener("load", function() {
    var check = sessionStorage.getItem("page");
    if(String(check) != "null") {
        getJSON();
    }
    else {
        window.open("../index.html", "_self")
    }
});

function getJSON() {
    const url = "https://api.jsonbin.io/b/62424a3da703bb674936dd4a";
    let myList = [];
    let localData = localStorage.getItem("myList");
    let page = sessionStorage.getItem("page");
    myList = JSON.parse(localData);
    jsloader();




    function jsloader() {
        fetch(url).then(rep => rep.json())
            .then((data) => {
                myList = data;
                myList.forEach((el, index) => {
                    if(`${el.name}`.search(page) != -1) {
                        makePage(el, index);
                    }
                });
                savetoStorage();
            });
    }

    function makePage(item, index) {
        document.title = item.name;
        let h2 = document.getElementById("name");
        let iframe = document.getElementById("map");
        let ul = document.getElementById("program list");
        h2.innerHTML = `${item.name}`;
        iframe.src = `${item.map}`;
        for(var i = 0;i < item.programs.length;i++) {
            let li = document.createElement("li");
            li.id = "l" + i;
            li.innerHTML = item.programs[i];
            ul.appendChild(li);
        }
        savetoStorage();
    }

    function savetoStorage() {
        localStorage.setItem("myList", JSON.stringify(myList));
    }
}