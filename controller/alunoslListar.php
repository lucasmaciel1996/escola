<?php
  require_once '../model/alunos.php';
  
  $con =  dbCon();
  $alunos =  ListaAlunos();
   //testart Conexao
  // var_dump($con);
  var_dump($alunos);