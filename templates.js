let getNameOptionTmpl = (data) => 
  `<div>
    <p>${data.name}</p>
    <p>${data.option}</p>
  </div>
  `;
          
let getFormTmpl = (data) =>
  `
    <form>
      <input value='${data.name}' type='text'/>
      <input type='submit' value='submit'/>
    </form>
  `;

let getTmpl = (data) => {
  let res;
  if(data.name == 'karmela') {
    res = getNameOptionTmpl(data);
  }
  else {
    res = getFormTmpl(data);
  }
  return res;
}