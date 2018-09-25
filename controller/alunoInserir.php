<?php
 require_once '../model/alunos.php';
 
 $nome="Mariana";
 $cpf="456.895.854-78";
 $sexo="F";
 $email="mariana@gmail.com";
 $turma="PHP";
 $telefone="45-4565-7878";
 
 $res =  CadastraAluno($nome,$cpf,$sexo,$email,$turma,$telefone);
 
 var_dump($res);