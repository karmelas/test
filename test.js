'use strict';
let option = document.querySelector("#options");

console.log(option);

//event listener
option.addEventListener( "change", (evt) => {
  
  let opt = evt.currentTarget.value;
  
  console.log(opt);
  
  fetch(`api.php?option=${opt}`)
    .then((res)=>res.json())
    .then((formattedJson)=>{
      let tmpl = getTmpl(formattedJson);
      content.innerHTML = tmpl;
      console.log(tmpl);
    });
  
  
  
} )//end event listener