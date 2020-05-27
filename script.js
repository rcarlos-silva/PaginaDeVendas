var count=new Number()
var seg=new Number()
var count=20;


function start(){
    if ((count - 1) >=0 ){
        count=count - 1;
        tempo.innerText=`A PROMOÇÃO VAI ACABAR EM ${count} SEGUNDOS`;
        setTimeout('start();', 1000);
       
    }
    
}
