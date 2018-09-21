//$(document).ready(function()
$(function()
 {   
     //carega o plugin
     $('input[name=cpf]').mask('000.000.000-00');
     
    $('#btn-cadastrar').click(function()
    {   
        if(valida()==true)
        {
           var html = "<tr>"+
                    "<td> ID</th>"+
                    "<td>"+$('input[name=nome]').val()+"</td>"+
                    "<td>"+$('input[name=cpf]').val()+"</td>"+
                    "<td>"+$('input[type=radio]:checked').val()+"</td>"+
                    "<td>"+$('input[name=telefone]').val()+"</td>"+
                    "<td>"+$('input[name=email]').val()+"</td>"+ 
                    "<td>"+$('select').val()+"</td>"+
                "</tr>";
               //console.log(html);
                $('#lista').append(html);
                //lista input 
                $('input[type=text]').val('');
                //limpa select
                $('select').val('0');
                //limpa radio
                $('input[name=sexo]').prop('checked',false);
        }  
    });//fim click
    $('input[name=telefone]').keydown(function (ev){
        console.log(ev.keyCode);
        if(((ev.keyCode<48 || ev.keyCode >57) && 
            (ev.keyCode <96 || ev.keyCode>105) && 
            (ev.keyCode != 46 || ev.keyCode !=8)
            ))
        {
            return false;
        }   
    });
    
});
function valida()
{
     var correto =true;
     //ocultando codigo
       $(".msg-erro").hide();
       //remover Class
       $('.input-erro').removeClass();
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
              //parent,sobe um nivel(../), addClass adciona class
              $(this).parent().addClass('input-erro');
              coreto =false;
           }
       });//fim each
       if($('select').val()==0)
       {
           $('.msg-erro').html("Campo turma  esta vazio");
           $('.msg-erro').show();
           $('select').parent().addClass('input-erro');
           correto =false;
       }
       if($('input[name =sexo]:checked').val()==undefined)
       {
           $('.msg-erro').html("Campo sexo  esta vazio");
           $('.msg-erro').show();
           $('input[name=sexo]').parent().addClass('input-erro');
           correto =false;
       }
       //regex js
       var regex_email= /^[a-z0-9.-]+@[a-z]+\.[a-z.]+$/;
       
       //Valida com Regex o email, para validar se esta valido
         var email = $('input[name=email]').val();
         //console.log(email);
       if(regex_email.test(email)== false)
       {
           
           $('.msg-erro').html("email invalido!");
           $('.msg-erro').show();
           $('input[name=email]').parent().addClass('input-erro');
           correto =false;
       }
       
       console.log(correto);
       return correto;
}