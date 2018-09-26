//$(document).ready(function()
$(function()
 {   
     //carega o plugin
     $('input[name=cpf]').mask('000.000.000-00');
     
    $('#btn-cadastrar').click(function()
    {   
        if(valida()==true)
        {
            var dados={
              nome:$('input[name=nome]').val(),
              cpf:$('input[name=cpf]').val(),
              sexo:$('input[type=radio]:checked').val(),
              telefone:$('input[name=telefone]').val(),
              email:$('input[name=email]').val(),
              turma:$('select').val()          
            };
            
            $.post('controller/alunoInserir.php',dados,function(res){
              if(res=="true"){
                  geraLista();
                //lista input 
                $('input[type=text]').val('');
                //limpa select
                $('select').val('0');
                //limpa radio
                $('input[name=sexo]').prop('checked',false);
              }else{
                  alert('Ocorreu um erro ao inserir o aluno');
              }    
            });
            
          
     }  
    });//fim click
    $('input[name=telefone]').keydown(function (ev){
       /// console.log(ev.keyCode);
        if(((ev.keyCode<48 || ev.keyCode >57) && 
            (ev.keyCode <96 || ev.keyCode>105) && 
            (ev.keyCode != 46 || ev.keyCode !=8)
            ))
        {
            return false;
        }   
    });//fim keydown
    //acao para delete 
    $("#lista").on('click','.btn-del',function(){
        //$(this).parent().parent().remove();
          var info={
                 id: $(this).parent().parent().attr('valid')
             };//fimgetInfo
             
        $.getJSON('controller/alunoDeletar.php',info, function(res){
            if(res==true){
                alert('Resgistro Deletado');
                geraLista();
                
            }else{
                alert('Erro ao deletar');
            }
        });//fimgetjson
          
    });//fim delete
    
    
   geraLista();  
    
});//fim ready
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
       
       //console.log(correto);
       return correto;
}
function geraLista()
{
   //limpa tabela
   $('#lista').empty();
    $.getJSON('controller/alunosListar.php',function(dados){
          ///console.log(dados);
          dados.forEach(function(val,idx){
              //console.log(idx,val);
               var html = '<tr valid="'+val.id+'">'+
                       "<td>"+val.id+"</th>"+
                       "<td>"+val.nome+"</td>"+
                       "<td>"+val.cpf+"</td>"+
                       "<td>"+val.sexo+"</td>"+
                       "<td>"+val.telefone+"</td>"+
                       "<td>"+val.email+"</td>"+ 
                       "<td>"+val.turma+"</td>"+
                       '<td><a href="#" class="btn-del">[X]</a></td>'+
                   "</tr>";
           $('#lista').append(html);
          });//fim Forearh 
       });//fim getJSON

}