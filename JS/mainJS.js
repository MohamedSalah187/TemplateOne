var icon = document.getElementById("MobileIcon");
var links = document.getElementById("MobileLinks");
icon.addEventListener("click",function (){
    if(links.style.display != "flex")
    {
        links.style.display = "flex";
    }
    else
    {
        links.style.display = "none";
    }
})