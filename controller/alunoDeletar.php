<?php
  require '../model/alunos.php';
  
  $id=7;
  //chama funcao
  $res =  DeletarAluno($id);
  //mostrar na tela
  var_dump($res);