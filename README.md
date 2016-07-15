# ClientSideRendering
SharePoint 2013 Client Side Rendering Engine

## Introdução

O SharePoint introduziu uma nova tecnologia para facilitar a vida dos profissionais que customizam a plataforma e, dessa forma, permitir a customização de objetos nativos de maneira mais simples.

É notório a tentativa da Microsoft em "empoderar" os profisionais que trabalham com a plataforma e, assim sendo, permitir que entreguem soluções mais rápido, com mais qualidade e sem depender de farm solutions.

O modo como conhecemos o mundo de desenvolvimento atual têm mudado. Cada vez mais o Javascript tem tomado conta das aplicações (e não somente do lado cliente).

Vemos frameworks surgirem para facilitar a nossa vida e permitir criarmos aplicações mais "ricas", interessantes para o usuário final e de maneira mais rápida.

## Client Side Rendering

Uma das coisas que a Microsoft fez no SharePoint é a renderização do lado do cliente, o CSR. Na prática, isso significa que o servidor faz todo o trabalho sujo de buscar os dados e entregá-los para que você consiga renderizá-los da forma como bem entender.

É possível alterar a forma que um campo específico seja renderizado no formulário de New Item, alterar uma view, ou alterar o aspecto de uma webpart que busca dados utilizando o Search (Content By Search).

### Search WebParts (Display Templates)

Utilizar webparts do search para buscar conteúdos pode ser uma solução muito elegante para os projetos. Além da performance ser fantástica, isso previne uma série de problemas quando lidamos com uma grande quantidade de dados e muitos acessos. 

O SharePoint utiliza esse modo para várias funcionalidades e ainda permite que você cutomize da forma que bem entender.

https://msdn.microsoft.com/en-us/library/office/jj945138.aspx

### JSLink

JSLink é a forma que temos para customizar como campos, views de lista, itens e até webparts. 

https://msdn.microsoft.com/en-us/library/office/jj220045.aspx

#### Field Sample
https://github.com/RARomano/ClientSideRendering/blob/master/field.js

<img width="317" alt="captura de tela 2016-07-01 as 10 03 33" src="https://cloud.githubusercontent.com/assets/12012898/16522267/1aaab43c-3f73-11e6-99b2-6df32255e722.png">


#### List View Sample
https://github.com/RARomano/ClientSideRendering/blob/master/customTemplate.js

<img width="386" alt="captura de tela 2016-07-01 as 10 08 09" src="https://cloud.githubusercontent.com/assets/12012898/16522355/c3345702-3f73-11e6-974f-88a6edf6ce05.png">
