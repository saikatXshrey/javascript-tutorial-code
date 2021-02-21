//dom tree nabvigation methods 
//childNodes - select all child nodes inv=cluding the whitespaces which is treated as textnode
//children  --> only shows the child items not the white spaces which are excluded 

//firstChild 
//lastChild


const result =document.querySelector('#special');
const all_children=result.childNodes;
console.log(all_children);

const  real=result.children;
console.log(real[2]);

console.log(result.lastChild)
console.log(result.firstChild);
