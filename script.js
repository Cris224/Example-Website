const gowPics = document.getElementById('gowPics');
const codPics = document.getElementById('codPics');
const r6Pics = document.getElementById('r6Pics');
function toggleGowImgs(){
    if (gowPics.style.display === "none"){
      gowPics.style.display = "";
      r6Pics.style.display = "none";
      codPics.style.display = "none";
    }
    else{
      gowPics.style.display = "none";
  }
  }
  function toggleCodImgs(){
    if (codPics.style.display === "none"){
      codPics.style.display = "";
      gowPics.style.display = "none";
      r6Pics.style.display = "none"
    }
    else{
      codPics.style.display = "none";
    }
    }
    function toggleR6Imgs(){
    if (r6Pics.style.display === "none"){
      r6Pics.style.display = "";
      gowPics.style.display = "none";
      codPics.style.display = "none";
    }
    else{
      r6Pics.style.display = "none";
    }
  }




 // if (r6Pics.style.display = "") {
 //   codPics.style.display ==="none";
 //   gowPics.style.display === "none";