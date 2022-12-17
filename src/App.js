import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { FaHome, FaIdCard,  FaUserFriends, FaTasks,FaFacebookSquare,FaInstagramSquare, FaThumbsUp } from 'react-icons/fa';
import Lista from './Lista';
import Criar from './Criar';
import Editar from './Editar';

function App() {
  return (
    <div className="App">
      <nav className='menu'>
      
      <img src={require('./img/avatar.png')} />
      <a href="#inicio" ><FaHome/></a>
      <a href="#sobre"><FaUserFriends/></a>
      <a href="#curso"><FaTasks/></a>
      <a href="#contato"><FaIdCard/></a>
      <h1 id="inicio"></h1>
      </nav>  
      <div className="banner">
      <h1 id="inicio">Instituto Social para o Imigrante</h1>
      <p>A Melhor opção para Crescer</p>
         </div>
         <div className="banner2">
         </div>
         <div className="caixa-p">
      <h1 id="sobre">Sobre a Empresa</h1>
      <img src={require('./img/avatar.png')} />
      <div className="caixa-r1">
      <p>
          É uma entidade sem fins lucrativos e foi criada por um grupo de quatro colegas, com a finalidade de ajudar a pessoas imigrantes, em situação de vulnerabilidade social.
 O objetivo é promover o fortalecimento com instituições que possam ajudar, para a superação pessoal incorporação do mundo da tecnologia e a programação.  
Capacitação profissional: o que é e qual é a sua importância
Capacitação profissional é o conjunto de iniciativas (cursos, treinamentos) que ajudam os imigrantes a desenvolverem suas habilidades profissionais. Essa capacitação pode focar em competências técnicas ou comportamentais.
Cada vez mais será necessário ter utilidade comprovada e uma renovação contínua de conhecimento para se manter ativo no mercado de avanço tecnológico escalável.
Nesse cenário, investir em capacitação profissional é um dos principais caminhos para assegurar a qualidade da equipe e alcançar o sucesso. Entenda melhor sobre a importância de capacitar seus funcionários e como você pode fazer isso, acompanhando a leitura a seguir.
    </p>
      </div>
         </div>


     <div className="caixa-p2">
      <h1>Treinamento e Palestras</h1>
      <div className="caixa-i2"></div>
      <div className="caixa-r2">
            <h3>Vem com a Gente!</h3>
      <p>A ISI oferece excelentes treinamentos para o seu desenvolvimento pessoal e profissional. Trabalhamos de forma personalizada para você a sua equipe. Vem com a Gente! CONSULTE NOSSOS TREINAMENTOS</p>
      </div>
         </div>



      <div className="base">
     
      <img src={require('./img/avatar.png')} />
        <div className='dr'>
        
          <h1>instituto social para o imigrante</h1>
          
          <p>
          Ê uma entidade sem fins lucrativos e foi criada por um grupo de quatro colegas, com a finalidade de ajudar a pessoas imigrantes, em situação de vulnerabilidade social.
 O objetivo é promover o fortalecimento com instituições que possam ajudar, para a superação pessoal incorporação do mundo da tecnologia e a programação.  
</p><p className='p'>
Capacitação profissional é o conjunto de iniciativas (cursos, treinamentos) que ajudam os imigrantes a desenvolverem suas habilidades profissionais. Essa capacitação pode focar em competências técnicas ou comportamentais.
Cada vez mais será necessário ter utilidade comprovada e uma renovação contínua de conhecimento para se manter ativo no mercado de avanço tecnológico escalável.
Nesse cenário, investir em capacitação profissional é um dos principais caminhos para assegurar a qualidade da equipe e alcançar o sucesso. Entenda melhor sobre a importância de capacitar seus funcionários e como você pode fazer isso, acompanhando a leitura a seguir.
    </p>
        </div>
       </div>
   

      <div className="base2">
     
     <img src={require('./img/avatar.png')} />
       <div className='is'>
       
         <h1>Nosso Objetivo</h1>
         <p>
         Nois temos o propósito de incluir pessoas refugiadas e migrantes em situação de vulnerabilidade social no mercado tecnológico brasileiro.

Com isso, oferecemos uma formação gratuita em desenvolvimento web nos modelos presencial* e online. Além de darmos suporte para que nossos alunos e alunas tenham condições de realizar o curso.

Abordamos conteúdos voltados para as demandas do mercado técnicas, metodologias ágeis e soft skills.

O foco principal é a empregabilidade. Por isso, após a finalização das aulas, buscamos conectar as pessoas formadas com empresas parceiras. </p>
       </div>
     </div>
          <div className='box'>
                <h1 >Nosso Equipe</h1>
                <div className='box-ms' >    
                    <h1>Ydalia Jimenez</h1>
                    <p> assistentes Social</p>
                   <div className='chat' > 
                    <a href="https://pt-br.facebook.com/" ><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" ><FaInstagramSquare /></a>
                </div>
                </div>

                <div className='box-ms1' >    
                    <h1>Issac la Rosa</h1>
                    <p>Manager</p>
                   <div className='chat1' > 
                   <a href="https://pt-br.facebook.com/" ><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" ><FaInstagramSquare /></a>
                </div>

                </div>
                <div className='box-ms2' > 
   
                    <h1>
                      Avelina Filipe
                    </h1>
                    <p>Tesorera</p>
                   <div className='chat2' > 
                   <a href="https://pt-br.facebook.com/" ><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" ><FaInstagramSquare /></a>
                </div>

                </div>
                <div className='box-ms3' > 
   
                    <h1>Carla Paredes </h1>
                    <p>Colaborador</p>
                   <div className='chat3' > 
                   <a href="https://pt-br.facebook.com/" ><FaFacebookSquare /></a>
                    <a href="https://www.instagram.com/" ><FaInstagramSquare /></a>
                </div>

                </div>
          </div>
         
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Lista />}></Route>
          <Route path='/cadastro/Criar' element={<Criar />}></Route>
          <Route path='/cadastro/Editar/:empid' element={<Editar />}></Route>
        </Routes>
      </BrowserRouter>
     
     <h1 id="curso"></h1>
      
   <footer class="footer">
    
  <p >Copyright (c) 2022  All rights reserved</p>
  <p >Turma 22 Time 4 </p>
 </footer>
    </div>
  );

}

export default App;
