<html>
    <head>
        <title>Cadastro de Aluno</title>
        <script src="js/jquery-3.3.1.js" type="text/javascript"></script>
         <script src="js/form.js" type="text/javascript"></script>
         <script src="js/jquery.mask.js" type="text/javascript"></script>
        <style>
            label{
                width: 100px;
                display: inline-block;
            }
            div{
                margin: 10px 0;
            }
            fieldset{
                width: 400px;
            }
            table{
                margin: 10px 0;
                border:1px solid;
                border-collapse: collapse;
            }
            th,td{
                border:1px solid;
                padding: 4px;
            }
            th{
                background-color: silver;
            }
            .msg-erro{
                color: red;
                border: 1px solid;
                padding: 4px;
                display: none;
             }
             .input-erro{
                 color:red;
                 
             }
             .input-erro input{
                 color: red;
             }
             .btn-del{
                 color:red;
                 border: 2px solid;
                 border-radius: 40px;
                 
             }
            
        </style>
    </head> 
    <body>
        <h1>Cadastro de Alunos</h1>
        <fieldset>
            <legend>Dados Alunos</legend>
            <div class="msg-erro">
                Messagem de erros
            </div>
            <div>
                <label>* Nome</label>
                <input type="text" name="nome" required="true"/>
            </div>
            <div>
                <label>Telefone</label>
                <input type="text" name="telefone"/>
            </div>
            <div>
                <label>CPF</label>
                <input type="text" name="cpf"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text" name="email"/>
            </div>
            <div>
                <label>Turma</label>
                <select name="turma">
                    <option value="0">Selecione uma turma</option>
                    <option value="PHP1">PHP1</option>
                    <option value="PHP2">PHP2</option>
                    <option value="MYSQL">MYSQL</option>
                    <option value="AJAX">AJAX</option>
                    <option value="HTML">HTML</option>
                    
                    
                </select>
            </div>
            <div>
                <label>Sexo</label>
                <input type="radio" name="sexo" value="M">Masculuino
                <input type="radio" name="sexo" value="F">Femenino
            </div>
            <button id="btn-cadastrar">Cadastrar</button>
        </fieldset>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Sexo</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Turma</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody id="lista">
                <tr>
                    <td>129</td>
                    <td>115.115.155-45</td>
                    <td>Joao Ricardo</td>          
                    <td>M</td>
                    <td>(41)3333-4545</td>
                    <td>joaoricardo@email.com</td>
                    <td>PHP1</td>
                    <td><a href="#" class="btn-del">[X]</a></td>
                </tr>  
            </tbody>    
        </table>
        
    </body>    
</html>