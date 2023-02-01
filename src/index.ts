import {someFn} from "./test";
const text = someFn(13)
document.getElementById('root').innerHTML = `
    <div>${text}, yaeh</div> 
  `

