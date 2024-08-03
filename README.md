# P1-Arquitetura
Criado para entrega da atividade da disciplina de Arquitetura de Software

Documentação:

No Padrão de Projeto Criacional, foi utilizado o Factory Method, com a classe 'FormaterFactory' tendo a funcionalidade de criar formatadores que são 'FormaterHTMl' e 'FormaterTXT' sem especificar sua classe exata, deixando o código mais flexível.

No Padrão de Projeto Estrutural, foi utilizado o padrão Decorator, com a classe 'FormaterDecorator', podendo estender as funcionalidades dos formatadores sem modificar suas classes

No padrão de Projeto Comportamental, foi utilizado o padrão Observer com as classes 'Subject' e 'Observer', onde permite que os objetos que tenham alguma mudança sejam notificados para todos os outros, facilitando a comunicação entre os mesmos

Utilizando os princípios SOLID, a Responsabilidade Única se aplica no arquivo 'CitiesReporter', onde foi alterado para realizar a separação das responsabilidades de leitura e formatação. O método de aberto e fechado, junto com o Factory Method na criação de objetos. 
