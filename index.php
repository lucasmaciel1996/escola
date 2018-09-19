<html>
    <head>
        <title>Cadastro de Aluno</title>
        <script src="js/jquery-3.3.1.js" type="text/javascript"></script>
         <script src="js/form.js" type="text/javascript"></script>
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
            
        </style>
    </head> 
    <body>
        <h1>Cadastro de Alunos</h1>
        <fieldset>
            <legend>Dados Alunos</legend>
            <div>
                <label>Nome</label>
                <input type="text" name="nome" />
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
                    <option>Selecione uma turma</option>
                    <option>PHP1</option>
                    <option>PHP2</option>
                    <option>MYSQL</option>
                    <option>AJAX</option>
                    <option>HTML</option>
                    
                    
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
                    <th>Sexo</th>
                    <th>Telefone</th>
                    <th>Email</th>
                    <th>Turma</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>129</td>
                    <td>Joao Ricardo</td>          
                    <td>M</td>
                    <td>(41)3333-4545</td>
                    <td>joaoricardo@email.com</td>
                    <td>PHP1</td>  
                </tr>  
            </tbody>    
        </table>    
    </body>    
</html>