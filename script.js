function seeMore_hideShow() {
    var workList = document.getElementById("work-list2");
    if (workList.style.display === "none" || workList.style.display === "") {
        workList.style.display = "grid";
    } else {
        workList.style.display = "none";
    }
}
