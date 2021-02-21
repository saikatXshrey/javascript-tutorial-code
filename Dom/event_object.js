//Evenet object
//event type
//evenet target
//event.preventDefault()>>>>whenever u use this on any link it does not get back to upper side of the page 

document.body.addEventListener('click',function(event)
{
    console.log(event.type);//return the type of event 

    console.log(event.target);//return the target here it return the element we are clicking 

});

document.getElementById('link').addEventListener('click', function(event)
{
event.preventDefault();
});