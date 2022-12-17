import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Lista = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetalhes = (id) => {
        navigate("/cadastro/detalhes/" + id);
    }
    const LoadEditar = (id) => {
        navigate("/cadastro/editar/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Tem certeza de Eliminar?')) {
            fetch("http://localhost:5000/cadastro/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Deletado com sucesso.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:5000/cadastro").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="caixa-crud">
        <div className="crud">
                <div className="titulo">
                    <h2>Cadastro de cursos</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="cadastro/criar" className="btn btn-success">Novo </Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="tabla">
                            <tr>
                                <td>ID</td>
                                <td>Nome</td>
                                <td>Telefone</td>
                                <td>E-mail</td>
                                <td>Acãoes </td>
                            </tr>
                        </thead>
                        <tbody>

                            {empdata &&
                                empdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.nome}</td>
                                        <td>{item.Telefone}</td>
                                        <td>{item.email}</td>
                                        <td><a onClick={() => { LoadEditar(item.id) }} className="btn btn-success">Editar</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Deletar</a>
                                          
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
            </div>
       
    );
}

export default Lista;