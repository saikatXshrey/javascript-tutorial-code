//ANCHOR localStorage.setItem('key','value');
//localStorage.getItem('key','value');

localStorage.setItem('name','joyesh Debnath');
localStorage.setItem('name','Kohli');
localStorage.setItem('book','Feluda');
localStorage.setItem('actor','Robert D Junior ');
localStorage.setItem('footballer','Messi');
//localStorage.removeItem('key')>>>>>Removes an item from the local storage 
localStorage.removeItem('actor');

//localStorage.getItem('key')>>>>>gets an item from the local storage of that particular key 
const get=localStorage.getItem('name');
console.log(get);

//ANCHOR  localStorage.clear()-->>> clears the whole data from the local strage all at once 

localStorage.clear();
