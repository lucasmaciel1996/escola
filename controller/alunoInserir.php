<?php
 require_once '../model/alunos.php';
 
 $nome=$_POST['nome'];
 $cpf=$_POST['cpf'];
 $sexo=$_POST['sexo'];
 $email=$_POST['email'];
 $turma=$_POST['turma'];
 $telefone=$_POST['telefone'];
 
 $res =  CadastraAluno($nome,$cpf,$sexo,$email,$turma,$telefone);
 
 //var_dump($res);
 echo json_encode($res);