### O que é...
    Um framework com base na linguagem JavaScript;
    Utilizado para criação de SPAs;
    Possui arquitetura baseada em componentes;
    Muito utilizado em aplicações de grande porte
    Compõe a stack MEAN;
    Angular 2+ é versão diferente do AngularJS (CLÁSSICO);

### Porque Angular?
    Estrutura de organização do projeto bem definida, promove simplicidade e reaproveitamento de código.
    Sistema de tooling muito rico: CLI, módulo HTTP, router e outros.
        CLI - permite digitar comandos a partir da linha de comando do terminal para execução de certas coisas (criação de componentes);
        
    Integração nativa com TypeScript;
    Mantido pelo Google;

### Pré-requisitos
    HTML e CSS nível básico/intermediário;
    Bom conhecimento em JavaScript (recurso base da linguagem e ES6+);
    Contato prévio com Node e npm irá ser de grande valia;

### Necessário
    Node.js: para instalar o Angular, outros pacotes e rodar scripts;
    Um editor de código (VS Code);

# Hello Word
    Primeiramente, a instalação do CLI do Angular com: npm install -g @angular/cli
        Permitindo criar os nossos projetos;

    Criar projeto, utilizando o: ng new <project name>
    Para testar o projeto basta digitar o comando: ng serve;
    Podemos alterar os arquivos dentro da "pasta app"; para refletir mudanças no navegador;

# Estrutura do Angular
    O que é criado após um ng new(comando que faz a criação do projeto):
        node_modules: Dependências externas do projeto;
        src(source/fonte): Onde será programada a aplicação;
        src/app: Pasta principal para componentes, serviços e etc;
        Os componentes são divididos em partes: 
            TS (lógica), HTML (template), CSS (estilos) e Testes;
        src/environments: Pastas para os ambientes rodados pelo angular