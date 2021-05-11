function goBack() {
    window.history.back();
}
function autoOpen() {
    if (screen && screen.width > 480) {
        document.getElementById("sidenav").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
        
        //comment the two line below to show hamburger even on desktop
        document.getElementById("hamburger").style.display ="none";
        document.getElementById("closebtn").style.display ="none";
    }
  }

function openNav() {
    document.getElementById("sidenav").style.width = "300px";
    document.getElementById("main").style.marginLeft = "300px";
  }
  
  function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
