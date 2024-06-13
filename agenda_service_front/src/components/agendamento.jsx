
// Componente para incluir usuarios no Banco de Dados.
//Declaração da função do componente usuario
import {useForm} from "react-hook-form";
// Importar o axios para o código
import {api} from "../config_axios" // aqui vai dar ruim
// Importar useState inclusivo do react usa metódo promisses com async e await
import { useState } from "react";
//Register serve para definir os nomes dos campos do form (validação)
// handleSubmit, para indicar o método a ser acionado no evento onSubmit do form
const agendamentos = () => {
const {register, handleSubmit} = useForm();
const [aviso, setAviso ] = useState("");
const salvar = async (campos) => {
    try {
            const resposta = await api.post("agendamento", campos);
            setAviso("Agendamento cadastrado com sucesso!");
            alert("Agendamento cadastrado com sucesso!");
        } catch (error) {
            setAviso("Erro ao cadastrar o Agendamento!");
        }
    }

    // const filtrarLista = async (campos) => {
    //     try{
    //         const lista = await api.get(`agendamento/filtro/${campos.palavra}`);
    //         lista.data.length
    //         ? setTarefas(lista.data)
    //         : alert("Não há tarefas cadastradas com a palavra chave pesquisada");
    //     }catch(error){
    //         alert(`Erro: ..Não foi possível obter os dados: ${error}`);
    //     }
    // }
    
    return( //aqui é o que vai ser exibido em tela
        <div className="container">
            <h4 className="container">Agendamento de Serviço</h4>

            <div className="container">
            <div className="row">
                <div className="col-sm-7">
                </div>
                {/* <div className="col-sm-5">
                    <form onSubmit={handleSubmit(filtrarLista)}>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" placeholder="Titulo Status" required {...register("palavra")} />
                            <input type="submit" className="btn btn-primary" value="Pesquisar" />
                            <input type="button" className="btn btn-danger" value="Todos" onClick={()=>{reset({palavra:""});obterLista();}}/>
                        </div>
                    </form>
                </div> */}
            </div>
            </div>

    
            {/* <table className="table table-striped mt-3">
                <thead>
                    <tr>
                        <th>Cód</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                        <th>Status</th>
                        <th>Data de Criação</th>
                        <th>Data Limite</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefas) => (
                        <ItemLista
                            key={tarefas.id_tarefas}
                            id_tarefas={tarefas.id_tarefas}
                            titulo={tarefas.titulo}
                            descricao={tarefas.descricao}
                            status={tarefas.status}
                            data_criacao={tarefas.data_criacao}
                            data_limite={tarefas.data_limite}
                            excluirClick={()=>excluir(tarefas.id_tarefas,tarefas.titulo)}
                            alterarClick={()=>alterar(tarefas.id_tarefas,tarefas.titulo)}
                        />
                    ))}
                </tbody>
            </table> */}

            <form onSubmit={handleSubmit(salvar)}>

            <div className="form-group mt-2">
                    <label htmlFor="servico">Serviço</label>
                            <select className="form-control" id="servico" required {...register("servico")}>
                                <option value="1">Limpeza</option>
                                <option value="2">Construção</option>
                            </select>
            </div>
            <div className="form-group mt-2">
                    <label htmlFor="prestador">Prestador</label>
                         <select className="form-control" id="prestador" required {...register("prestador")}>
                            <option value="1">Limpeza</option>
                            <option value="2">Construção</option>
                         </select>
              
                  <div className="form-group">
                    <label htmlFor="dt_inicio">Data de Início</label>
                        <input type="date" className="form-control" id="dt_inicio" required autoFocus {...register("data_inicio")}/>

                <div className="form-group mt-2">
                     <label htmlFor="dt_fim">Hora</label>
                         <input type="time" className="form-control" id="dt_fim" required {...register("data_fim")}/>
                </div>
                <div className="form-group mt-2">
                     <label htmlFor="obs">Observação</label>
                         <input type="text" className="form-control" id="obs" required {...register("observacao")}/>
                </div>
                         <input type="submit" className="btn btn-primary mt-3" value="Agendar" />
                <input type="reset" className="btn btn-danger mt-3" value="Limpar"/>
            </div>
            </div>
        </form>
        <div className="alert"></div>
                
        </div>
  
)
}
export default agendamentos;
