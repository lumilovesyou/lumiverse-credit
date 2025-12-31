document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("search").addEventListener("input", () => {
        search();
    });
});

function search() {
    const search = document.getElementById("search").value.toLowerCase();
    const pagesDiv = document.getElementById("pages");
    pages = pagesDiv.children;
    for (let i = 0; i < pages.length; i++) {
        console.log(pages[0].children[0].innerHTML);
        if (pages[i].children[0].innerHTML.toLowerCase().includes(search)) {
            pages[0].style.visibility = "visible";
        } else {
            pages[0].style.visibility = "hidden";
        }
    }
}