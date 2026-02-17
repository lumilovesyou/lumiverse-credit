document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("input", () => {
        search();
    });
});

function search() {
    const search = document.getElementById("search").value.toLowerCase();
    Array.from(document.getElementsByTagName("p")).forEach((element) => {
        console.log(element.children[0].innerHTML)
        if (element.children[0].innerHTML.toLocaleLowerCase().includes(search) && search !== "") {
            element.style.display = "none"
        } else {
            element.style.display = "inherit";
        }
    });
}