<?php
  require '../model/alunos.php';
  
  $id= $_GET['id'];
  //chama funcao
  $res =  DeletarAluno($id);
  //mostrar na tela
  //var_dump($id);
  echo json_encode($res);
  