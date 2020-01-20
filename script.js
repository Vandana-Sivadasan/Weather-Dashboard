$( document ).ready(function() {
    console.log( "ready!" );
    $.ajax({url: "http://api.openweathermap.org/data/2.5/weather?q=United-States,uk&appid=b6907d289e10d714a6e88b30761fae22", success: function(result){
    console.log(result);
      }});
});
