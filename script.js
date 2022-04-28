$("button").click(function(){
 let variable1=$(".U").val(); 
 let variable2=$(".F").val();
  let variable3=$(".W").val();
    
 let variable4= variable2*2726;

   
 $(".fortune-display").append(variable1+" you will make  $"+variable4 +"by 2050");
    
    console.log( variable1,variable2,variable3);
    
});