
// Componente para incluir usuarios no Banco de Dados.
//Declaração da função do componente usuario
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios" // aqui vai dar ruim
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const usuarios = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("usuario", campos);
            setAviso("Usuario cadastrado com sucesso!");
            alert("Usuario cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar o Usuario!");
        }
    }
//Metódo chamado para enviar o form on submit
//const salvar = (campos) => {
//JSON.stringify) converte um objeto javascript para uma String JSON
//alert(JSON.stringify(campos));
//}
//form on submit={handleSubmit(salvar)}


    return( //aqui é o que vai ser exibido em tela
        <div className="container">
            <h4 className="container">Inclusão de Cliente</h4>
            <form onSubmit={handleSubmit(salvar)}>
                <div className="form-group">
                    <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" required autoFocus {...register("nome")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="cpf">CPF</label>
                         <input type="text" className="form-control" id="cpf" required {...register("cpf")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="email">E-mail</label>
                         <input type="email" className="form-control" id="email" required {...register("email")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="telefone">Número de Telefone</label>
                         <input type="number" className="form-control" id="telefone" required {...register("numero")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="nascimento">Data de Nascimento</label>
                         <input type="date" className="form-control" id="nascimento" required {...register("data_nascimento")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="senha">Senha</label>
                         <input type="text" className="form-control" id="senha" maxLength={255} required {...register("senha")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="rua">Rua</label>
                         <input type="text" className="form-control" id="rua" required {...register("rua")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="cep">CEP</label>
                         <input type="number" className="form-control" id="cep" required {...register("cep")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="numero">Número</label>
                         <input type="number" className="form-control" id="numero" required {...register("numero")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="complemento">Complemento</label>
                         <input type="text" className="form-control" id="complemento" required {...register("complemento")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="cidade">Cidade</label>
                         <input type="text" className="form-control" id="cidade" required {...register("cidade")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="estado">Estado</label>
                         <input type="text" className="form-control" id="estado" required {...register("estado")}/>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="bairro">Bairro</label>
                         <input type="text" className="form-control" id="bairro" required {...register("bairro")}/>
                </div>
                <input type="submit" className="btn btn-primary mt-3" value="Enviar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
        </form>
        <div className="alert"></div>
                
        </div>
    )
}

export default usuarios;
