<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Documentação Técnica do Aplicativo Smart Study</h1>

    <h2>Sumário</h2>
    <ol>
        <li><a href="#visao-geral">Visão Geral</a></li>
        <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas</a></li>
        <li><a href="#estrutura-do-projeto">Estrutura do Projeto</a></li>
        <li><a href="#componentes-principais">Componentes Principais</a></li>
        <li><a href="#instrucoes-de-instalacao">Instruções de Instalação</a></li>
        <li><a href="#executando-o-projeto">Executando o Projeto</a></li>
        <li><a href="#testes">Testes</a></li>
        <li><a href="#contribuicao">Contribuição</a></li>
        <li><a href="#licenca">Licença</a></li>
    </ol>

    <h2 id="visao-geral">Visão Geral</h2>
    <p>O <strong>Smart Study</strong> é um aplicativo projetado para ajudar os usuários a gerenciar seu tempo de estudo de maneira eficiente. Ele integra técnicas de Pomodoro, agendamento de tarefas, anotações e flashcards para proporcionar uma experiência de aprendizado otimizada.</p>

    <h2 id="tecnologias-utilizadas">Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>React</strong>: Biblioteca JavaScript para construção de interfaces de usuário.</li>
        <li><strong>CSS</strong>: Para estilização do aplicativo.</li>
        <li><strong>React Testing Library</strong>: Para testes de integração e unidade.</li>
        <li><strong>Jest</strong>: Framework de testes em JavaScript.</li>
    </ul>

    <h2 id="estrutura-do-projeto">Estrutura do Projeto</h2>
    <pre>
/smart-study
  /public
    /images
     /Smart-study.jpg
    index.html
    manifest.json    
  /src
    /components
      Banner.js
      Flashcards.js
      Notes.js
      Pomodoro.js
      Schedule.js
    App.js
    index.js
  /css
    App.css
  /tests
    App.test.js
  package.json
    </pre>

    <h2 id="componentes-principais">Componentes Principais</h2>
    <h3>1. App</h3>
    <p>Componente principal que gerencia a renderização dos outros componentes.</p>

    <h3>2. Banner</h3>
    <p>Componente que exibe o banner do aplicativo.</p>

    <h3>3. Pomodoro</h3>
    <p>Implementa a técnica de Pomodoro para gerenciamento de tempo de estudo.</p>

    <h3>4. Schedule</h3>
    <p>Permite ao usuário agendar suas tarefas de estudo.</p>

    <h3>5. Notes</h3>
    <p>Fornece uma área para anotações rápidas.</p>

    <h3>6. Flashcards</h3>
    <p>Permite a criação e utilização de flashcards para revisão de conteúdo.</p>

    <h2 id="instrucoes-de-instalacao">Instruções de Instalação</h2>
    <ol>
        <li>Clone o repositório:</li>
        <pre>git clone https://github.com/seuusuario/smart-study.git</pre>
        <li>Navegue até a pasta do projeto:</li>
        <pre>cd smart-study</pre>
        <li>Instale as dependências:</li>
        <pre>npm install</pre>
    </ol>

    <h2 id="executando-o-projeto">Executando o Projeto</h2>
    <p>Para iniciar o aplicativo, utilize o comando:</p>
    <pre>npm start</pre>
    <p>O aplicativo estará disponível em <a href="http://localhost:3000">http://localhost:3000</a>.</p>

    <h2 id="testes">Testes</h2>
    <p>Para rodar os testes, execute:</p>
    <pre>npm test</pre>
    <p>Os testes são realizados usando o Jest e a React Testing Library.</p>

    <h2 id="contribuicao">Contribuição</h2>
    <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir uma <strong>issue</strong> ou enviar um <strong>pull request</strong>.</p>


 
 
