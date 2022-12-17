import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Criar = () => {

    const[id,idchange]=useState("");
    const[nome,nomechange]=useState("");
    const[Telefone,Telefonechange]=useState("");
    const[email,emailchange]=useState("");
   
    const[active,activechange]=useState(true);
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={nome,Telefone,email,active};
      

      fetch("http://localhost:5000/cadastro",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Criado com Sucessos.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }

    return (
        <div>

            <div className="crud2">
                <div >
                    <form  onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2> Criar Novo</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                  

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input required value={nome} onMouseDown={e=>valchange(true)} onChange={e=>nomechange(e.target.value)} className="form-control"></input>
                                        {nome.length==0 && validation && <span className="text-danger">Inserir nome</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Telefone</label>
                                            <input value={Telefone} onChange={e=>Telefonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                  

                                   
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Salvar</button>
                                           <Link to="/" className="btn btn-danger">Voltar</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
}

export default Criar;