import {someFn} from "./test";
const text = someFn(5)
document.getElementById('root').innerHTML = `
    <div>${text}</div> 
  `

