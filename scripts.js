function switchLight(event){
  var container = document.getElementById("body");
  var swit = document.getElementById("lightSwitch");
  var switLabel = swit.innerHTML;
  var color = container.style.backgroundColor;
  if (color === 'black') {
    swit.innerHTML = switLabel.replace('☾','☀')
    container.style.backgroundColor = 'white';
    swit.style.backgroundColor = 'white';
  } else {
    swit.innerHTML = switLabel.replace('☀','☾')
    container.style.backgroundColor = 'black';
    swit.style.backgroundColor = 'black';
  };
  /*alert(switLabel);*/
}
