//$(document).ready(function()
$(function()
{
    $('#btn-cadastrar').click(function()
    {   
        valida();
        var html = "<tr>"+
                    "<th>ID</th>"
                    "<th>"+$('input [name=nome]').val+"</th>"
                    "<th>"+$('input[name=cpf]').val()+"</th>"
                    "<th>"+$('input[name=sexol]').val()+"</th>"
                    "<th>"+$('input[name=telefone]').val()+"</th>"
                    "<th>"+$('input[type=radio]:checked').val()+"</th>"
                    "<th>"+$('select').val()+"</th>"
                +"</tr>"
                $('lista').append(html);
    });//fim click
});
function valida()
{
     //ocultando codigo
         $(".msg-erro").hide(); 
        //console.log("save");
       $('input[type = text]').each(function()
       {
           //pegando valor (nome) elemento no foreach (this)
           var valor = $(this).val().trim();
            /*
             *  nome =nome.trim();
             * 
             */
            
           //pegando valor atributo name do input
           var campo = $(this).attr("name");

           if(valor == "")
           {
              //setando mensagem na tela (campo) contenando com texto 
              $(".msg-erro").html("Campo "+campo +" esta vazio");
              //mostra mensagem na tela
              $(".msg-erro").show();
           }
       });//fim each
       if($('select').val()==0)
       {
           $('.msg-erro').html("Campo turma  esta vazio");
           $('.msg-erro').show();
       }
       if($('input[name =sexo]:checked').val()==undefined)
       {
           $('.msg-erro').html("Campo sexo  esta vazio");
           $('.msg-erro').show();
       }
}