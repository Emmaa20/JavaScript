function Getgroup(){
    
    var text=document.getElementById('input').value;
    
    var number = text.slice(-3,-2);
    
    if (number==1) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="black"
        
   
    }
    else if (number==2) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="red"
    }
    else if (number==3) {
        document.getElementById('text').innerHTML =text
        document.getElementById('text').style.color="yellow"
    }
    else{
        document.getElementById('text').innerHTML ='Class not found'
    }
}
