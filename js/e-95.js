// JavaScript Document
//����������� �� ��������.
//http://91.234.27.254:8080/taxi/client/
//http://localhost:8080/WebAPITaxi/Register?app=CxTaxiWebAPI&phone=***********
$('#telephon').click( function() {
    var tel=document.getElementById("fulltel").value; //����� ����� ��������
    //if (tel=='') {return}; //���� ����� ������ - �����.
    //alert(tel);
    $.ajax({
        //url: 'http://91.234.27.254:8080/WebAPITaxi/Register?callback=?',
        //dataType: 'jsonp',
        url: 'http://91.234.27.254:8080/WebAPITaxi/Register',
        data: {app: 'CxTaxiWebAPI', phone: tel},


        success: function (data) {
            //document.getElementById("info").value=data.message;
            console.log(data.message);
            win_show(data.message); //������� ���� ���������

        }
    });

    $('#two').dialog('close');

});


//�������: �������� ��������.
//------------------------------------------------------------------------------------------------------------------
/*
$(document).on("pagehide","#two",function(){
    window.location="#three";
});

 */

//������� ������ ���� ���������
//----------------------------------------------------------------------------------------
function win_show (st){
    document.getElementById("info").value=st; //�������� ����� ��� ������.
    window.location="#three"; //������� ����.
}
