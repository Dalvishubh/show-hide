var a=document.querySelector('#A2')
var b=document.querySelector('#A1')

// function hide()
// {
//   a.style.display="none" 
// }


// function hide1()
// {
//   b.style.display="none"
// }

// function show()
// {

//    a.style.display="block"
//    b.style.display="block"

// }

var c=true

function A(){
if(c==true)
{
  a.style.display="none" 
  c=false;
}
else if(c==false)
{
  a.style.display="block"
  c=true;
}
}

var d=true

function B(){
  if(d==true)
  {
     b.style.display="none" 
     d=false; 
    }

   else if(d==false)
   {
      b.style.display="block"  
   } 


}

