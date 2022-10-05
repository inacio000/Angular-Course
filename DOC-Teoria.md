### O que é...
* Um framework com base na linguagem JavaScript;
* Utilizado para criação de SPAs (Single Page Aplications);
* Possui arquitetura baseada em componentes;
* Muito utilizado em aplicações de grande porte
* Compõe a stack MEAN;
* Angular 2+ é versão diferente do AngularJS (CLÁSSICO);
#
### Por que Angular?
* Estrutura de organização do projeto bem definida, promove simplicidade e reaproveitamento de código.
* Sistema de tooling muito rico: CLI, módulo HTTP, router e outros.

        CLI - permite digitar comandos a partir da linha de comando do terminal para execução de certas coisas (criação de componentes e etc);
        
* Integração nativa com TypeScript;
* Mantido pelo Google;
#
### Pré-requisitos
* HTML e CSS nível básico/intermediário;
* Bom conhecimento em JavaScript (recurso base da linguagem e ES6+);
* Contato prévio com Node e npm irá ser de grande valia;
#
### Necessário
* Node.js: para instalar o Angular, outros pacotes e rodar scripts;
* Um editor de código (VS Code);
#
# Hello Word
* Primeiramente, a instalação do CLI do Angular com: npm install -g @angular/cli

        Permitindo criar os nossos projetos;

* Criar projeto, utilizando o: ng new `<project name>`
* Para testar o projeto basta digitar o comando: ng serve;
* Podemos alterar os arquivos dentro da "pasta app"; para refletir mudanças no navegador;
#
## Rodar um projeto
> `ng serve`
#
# Estrutura do Angular
* O que é criado após um ng new(comando que faz a criação do projeto):

        node_modules: Dependências externas do projeto;

        src(source/fonte): Onde será programada a aplicação;

        src/app: Pasta principal para componentes, serviços e etc;

        Os componentes são divididos em partes: 
            TS (lógica), HTML (template), CSS (estilos) e Testes;

        src/environments: Pastas para os ambientes rodados pelo angular
#
# Criação de componentes
* Para criar componente podemos utilizar o CLI;
* O comando é: ng generat `<name>`
* Todos os arquivos necessários serão criados no projeto;
* Para importar o componente basta utiliar o seu selector em um HTML de outro componente;
#
# Interpolação de dados
* A interpolação de dados é um recurso que ensina a trabalhar com componentes do Angular;
* As variáveis serão criadas no arquivo .ts, dentro da classe;
* Ou seja, estas variáveis são propriedades da classe;
* E então teremos acesso a estes dados no arquivo .html, o template;
* A impressão é feita através de: `{{ dado }}`
#
# CSS no Angular
* Os estilos em aplicações de Angular podem ser feitos de duas maneras;
* Global: utilizando o arquivo styles.css, que fica em src;
* Scoped: estilos a nivel de componente, criado quando demos um generate;
#
# Compartilhando dados
* Em Angular podemos compartilhar dados do componente PAI com o componente Filho
* Para isso, vamos disponibilizar na chamada do componente (html global) o nome do dado que será recebido com a seguinte sintaxe: `[dado]`;
* E no código .ts do componente filho vamos utilizar o decorator @Input, que tem como papel entregar o dado para o template;
#
# Diretivas
* Em Angular temos um recurso chamado diretivas;
* Que podem realizar diversas funções no sistema, como "aplicar estilos a um elemento" (como estilos inline);
* Elas começam sempre com ng, o nome fica como: `<tag [ngAlgumaCoisa]="{'font-family': variableName}"></tag>`;
#
# Renderização condicional
* É possível exibir determinado conteúdo por meio de uma condicional;
* Utilizamos a diretiva `<tag *ngIf="condition"></tag>` para isso;
* Os valores podem ser dinâmicos(propriedades), mas podemos realizar outros tipos de comparações;
* Há a possibilidade também de imprimir um cenário para validação de falso, com o else;
#
# Eventos
* Podemos ativar nos componentes para disparar algum método;
* Um evento clássico que utilizamos é o click;
* A sintaxe é: `(click)="algumaFuncao();`"
* Os métodos ficam na classe;
* Este recurso também é utilizado para acessar uma API;
#
# Emitindo eventos
* Podemos comunicar eventos de um componente filho para o PAI;
* Para isso precisa-se o `@Output`, que vai fazer a saida do evento co componente filho;
* Na tag de invocação do componente no template, escolhemos um método para executar quando o evento for emitido;
* Ex: 
* > `(emit)="onEmit()"`
#
# Renderização de listas
* Outro recurso importante é `loop` em listas;
* Para isso precisa-se de uma propriedade com os itens da lista;
* E no template do componente utiliza-se `*ngFor`
* A sintaxe é:
* > `*ngFor="let item of items"`
* Desta maneira podemos renderizar template baseado em dados;
#
# A importância das interfaces (Recurso do TypeScript)
* Toda entidade que irá se trabalhar com ele precisa de uma interface;
* Isso vai tornar mosso código mais simples ao longo do programa;
* Padronizando ele e facilitando a manutenção;
#
# Pipe operator
* Os pipe operators são recursos para trabalhar com strings nos templates;
* Podemos realizar diversas funções, como deixar o texto em caixa alta;
* A sintaxe é: `{{ dado | algumPipeOperator }}`
* Desta forma nos poupamos de regras de CSS ou manipulação de strings com JS;
#
# Two way data binding
* O `Two way data binding` é um recurso muito interessante para trabalho com formulário;
* Basicamente conseguimos alterar props e o template com preenchimento de `inputs`;
* É necessário importar o `FormsModule` no componente principal;
* E tamebém declarar o `ngModel` no `input`, além de preencher também o atributo name, todos com o mesmo valor;
#
# Services
* O `Service` é outra parte fundamental da arquitetura do Angular;
* Geralmente é onde ficam as requisições para as APIs que utilizamos no projeto; 
* Precisa-se criar o service com(cli):
* > `ng generate service <name>`
* Importar no componente e iniciar no `constructor`
* Depois é possível acessar os método dele;
#
# Angular Router
* Nós vamos criar um novo arquivo para declarar nossas rotas;
* Nele vamos importar os módulos `RouterModule` e `Routes`
* Após a definição estas rotas precisam ser importadas em `app/module.ts`
* E por fim no `template` principal criamos as rotas;
* E substituimos os componentes por: 
* > <router-outlet>