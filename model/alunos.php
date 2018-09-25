<?php
 function dbCon()
 {
     $usuario='root';
     $senha ="elaborata";
     $banco ="escola";
     $server="localhost";
     
     $con = mysqli_connect($server, $usuario, $senha, $banco);
     return $con;     
 }
 function ListaAlunos()
 {
    $con =  dbCon();
    $query= 'SELECT * FROM alunos';
    
    $res = mysqli_query($con, $query);
    
   return  mysqli_fetch_all($res,MYSQLI_ASSOC);
 }
 function CadastraAluno($nome,$cpf,$sexo,$email,$turma,$telefone)
 {
     $con=  dbCon();
     $query="INSERT INTO `alunos`"
             . " (`id`, `nome`, `cpf`, `sexo`, `telefone`, `email`, `turma`)"
             . "VALUES "
             . "(NULL, '$nome', '$cpf', '$sexo', '$telefone', '$email', '$turma')"
             . ";";
     
     $res =mysqli_query($con,$query);
     
     return $res;
 }
 function DeletarAluno($id)
 {
     $con = dbCon();
     $query ="DELETE FROM alunos WHERE id=$id";
     $res=mysqli_query($con, $query);
     
     return $res;    
 }