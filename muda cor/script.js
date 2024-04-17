function mudarCor(action) {
  const div = document.getElementById("quadrado");
  if(action === 1){
    div.style["background-color"] = "gray";
  }else{
    div.style["background-color"] = "red";
  }
}

 