$(document).ready(function(){
    
    var lessBreak = $("#lessbreak");
    var moreBreak = $("#morebreak");
    var lessSession = $("#lesssession");
    var moreSession = $("#moresession");
    var breakk = $("#break");
    var session = $("#session");
    var timeMinutes = $("#timeMinutes");
    var timeSeconds = $("#timeSeconds");
    var start = $("#start");
    var reset = $("#reset");
    
    var breakTime = 5;
    var sessionTime = 25;
    
    var minutes = 25;
    var seconds = 60;
    
    var intervalo1;
    var intervalo2;
    var intervalo3;
    var intervalo4;
    
    var minutesBreak;
    
    lessBreak.on("click", function(){
        if(breakTime<=0){
            breakTime = 0;
            breakk.text(breakTime);
        }else{
            breakTime--;
            breakk.text(breakTime);
            
        }
    });
    
    moreBreak.on("click", function(){
        breakTime++;
        breakk.text(breakTime);
    });
    
    lessSession.on("click", function(){
        if(sessionTime<=0){
            sessionTime = 0;
            session.text(sessionTime);
            timeMinutes.text(sessionTime);
            minutes=0;
        }else{
            sessionTime--;
            session.text(sessionTime);
            timeMinutes.text(sessionTime);
            minutes = sessionTime;
        }
    });
    
    moreSession.on("click", function(){
        sessionTime++;
        session.text(sessionTime);
        timeMinutes.text(sessionTime);
        minutes = sessionTime; 
    });
    
    
    reset.on("click", function(){
        
        minutes = 25;
        seconds = 0;
        breakTime = 5;
        sessionTime =25;
        breakk.text("5");
        session.text("25");
        
        clearInterval(intervalo1);
        clearInterval(intervalo2);
        clearInterval(intervalo3);
        clearInterval(intervalo4);
        
        timeMinutes.text(sessionTime);
        timeSeconds.text("00");
        
    });
    
    
    
    
    var inicio = function(){
        clearInterval(intervalo3);
        clearInterval(intervalo4);
        $("body").css("background-color", "dodgerblue");
        $(".boton").css("background-color", "dodgerblue");
        
        intervalo1 = setInterval(secondsFunc, 1000);
        intervalo2 = setInterval(minutesFunc, 60000);
        minutes = sessionTime;
        seconds = 60;
        if(minutes-1<=0){
            timeMinutes.text("0");
            minutes=0;
        }else{
            timeMinutes.text(minutes-1);
        }
    }
    
    start.on("click", inicio);
    
    function minutesFunc(){
        minutes--;
        timeMinutes.text(minutes-1);
        if(minutes<=0){
            timeMinutes.text("0");
            minutes=0;
        }
    }
    
    function secondsFunc(){
        seconds--;
        timeSeconds.text(seconds);
        if(seconds<=9){
            timeSeconds.text("0"+seconds);
        }
        if(minutes <= 0 && seconds < 1){
            console.log("ya");
            breakFunction();
        }
        if(seconds<1){
            seconds=60;
        }
    }
    

    function breakFunction(){
        $("body").css("background-color", "red");
        $(".boton").css("background-color", "red");
        console.log("entrado");
        clearInterval(intervalo1);
        clearInterval(intervalo2);
        
        minutesBreak = breakTime;
        timeMinutes.text(minutesBreak-1);
        seconds = 60;
        
        intervalo3 = setInterval(minutesBreakFunc, 60000);
        intervalo4 = setInterval(secondsBreakFunc, 1000);
        
    }
    
    
    function minutesBreakFunc(){
        minutesBreak--;
        timeMinutes.text(minutesBreak-1);
        if(minutesBreak<=0){
            timeMinutes.text("0");
            minutesBreak=0;
        }
    }
    
    
    function secondsBreakFunc(){
        seconds--;
        timeSeconds.text(seconds);
        
        if(seconds<=9){
            timeSeconds.text("0"+seconds);
        } 
        if(minutesBreak <= 0 && seconds < 1){
            console.log("hola mundo");
            
            
            inicio();
            
        }
        if(seconds<1){
            seconds=60;
        }
    }
    
    
});