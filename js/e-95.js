// JavaScript Document
//Регистрация по телефону.
//http://91.234.27.254:8080/taxi/client/
//http://localhost:8080/WebAPITaxi/Register?app=CxTaxiWebAPI&phone=***********
$('#telephon').click( function() {
    var tel=document.getElementById("fulltel").value; //Взять номер телефона
    //if (tel=='') {return}; //Если путая строка - выйти.
    //alert(tel);
    $.ajax({
        //url: 'http://91.234.27.254:8080/WebAPITaxi/Register?callback=?',
        //dataType: 'jsonp',
        url: 'http://91.234.27.254:8080/WebAPITaxi/Register',
        data: {app: 'CxTaxiWebAPI', phone: tel},


        success: function (data) {
            //document.getElementById("info").value=data.message;
            console.log(data.message);
            win_show(data.message); //Вывести окно сообщения

        }
    });

    $('#two').dialog('close');

});


//Событие: Закрытие страницы.
//------------------------------------------------------------------------------------------------------------------
/*
$(document).on("pagehide","#two",function(){
    window.location="#three";
});

 */

//Функция вывода окна сообщения
//----------------------------------------------------------------------------------------
function win_show (st){
    document.getElementById("info").value=st; //Передать текст для вывода.
    window.location="#three"; //Вывести окно.
}
