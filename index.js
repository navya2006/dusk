    // LOADER
    
    var myVar;
    function myFunction() {
       myVar = setTimeout(showPage, 5000);
    }
     
    function showPage() {
       document.getElementById("load").style.display = "none";
       document.getElementById("mainbod").style.display = "block";
    } 

    //COMMENTING
function auto_height(elem) {
    elem.style.height = "2px";
    elem.style.height = (elem.scrollHeight) + "px";
}