# Projeto de seleção Labenu: preparad@ para o Labenu?

Obrigado por participar do processo seletivo da Labenu. Nesse repositório (repositório é o nome que damos a esse conjunto de arquivos!) você encontra as instruções e arquivos necessários para você participar desse processo. Para dar início, pedimos que você leia esse texto (arquivo README.md) por completo, e siga de forma rigorosa as nossas instruções. Qualquer dúvida ou problema no processo, não exite em entrar em contato com a equipe Labenu pelo nosso Slack ou email oi@labenu.com.br. Boa sorte!

## 1. Processo Seletivo - Detalhes prévios
### 1.1 Regras
- O participante deve seguir as regras e instruções determinadas nesse documento.
- Todas as atividades do projeto devem ser realizadas **pelo próprio aluno**. Esse é um critério eliminatório do processo seletivo. Durante a etapa de entrevista, vamos avaliar se o participante dominou os conceitos aplicados no projeto.  
- Os participantes devem consultar documentações, sites e vídeos para auxiliar no desenvolvimento do projeto. Não recomendamos copiar e colar código dessas fontes, uma vez que verificaremos o entendimento do participante.    
- Os participantes são incentivados a utilizar o Slack da Labenu para tirar dúvidas sobre o seu projeto e atualizar nossa equipe sobre o seu andamento. Nossa equipe utilizará esse canal para ajudar os participantes, e essa interação será avaliada positivamente. Os alunos podem interagir entre si nos canais do Slack.
- Quando terminar o projeto, basta enviá-lo para nós através do formulário de entrega (mais infos sobre a entrega podem ser encontradas no Slack).
- Para avaliar o projeto, nossa equipe vai abrir o link do Repl.it enviado pelo formulário de entrega. Nenhuma etapa adicional deve ser necessária para abrir o site desenvolvido por você.
- Não é permitido o uso de bibliotecas e código de terceiros. Todo o código deve ser escrito por você e isso será verificado na etapa de entrevista.  

### 1.2 Projeto base
Esse é o pilar fundamental da sua entrega. O projeto consiste na criação de um site utilizando HTML, CSS e Javascript. O site deve ter apenas uma página, o arquivo index.html (outros arquivos css e js podem ser criados separadamente). O participante deve seguir, da melhor forma que conseguir, o layout que está no arquivo wireframe.png. As cores não estão especificadas e o participante deve escolher a melhor forma de descobrí-las. Esse repositório contém a imagem necessária para construir essa página.
Existe um campo de input de texto no final da página e um botão com o texto "Enviar". Ao clicar nesse botão, um alerta deve ser apresentado na página com o texto "O email usuario@labenu.com.br foi enviado", sendo que o email deve conter o texto digitado pelo usuário da página. Esse alerta deve ser apresentado utilizando a função alert do javascript (é só um detalhezinho de Javascript - você vai encontrar um tutorial para isso no final deste documento). Sabemos que esses termos podem não fazer parte do seu dia-a-dia, mas fique tranquil@, daremos mais detalhes abaixo. :)

#### 1.3 Desafios
Para deixar o seu projeto mais completo e versátil, trouxemos alguns desafios! Eles fazem parte da sua entrega e esperamos que vocês tentem trabalhar neles. Mas não se preocupe, não fazer eles não vai te tirar da Labenu! Como já falamos, a nossa avaliação final está diretamente relacionada ao engajamento e resiliência demonstrados durante o curso. Mas, para quem terminar o Projeto Base antes da data limite, queremos muito ver as soluções de vocês para essas questões :)
- **Desafio 1:** Preparar o site para ser apresentado em telas mobile. Fica a critério do participante a melhor forma de ajustar o conteúdo do site para plataformas mobile. Para avaliar esse desafio extra, nossa equipe vai abrir o mesmo arquivo index.html em um iphoneX. (exemplo no arquivo responsive.png)
- **Desafio 2:** Realizar a verificação de email válido no texto digitado pelo usuário no campo "email". Essa verificação deve ser realizada utilizando javascript. Se o email for inválido a mensagem "Email inválido" deve ser apresentada no site utilizando a função alert() do javascript.
- **Desafio 3:** Incluir um texto de boas vindas quando o usuário enviar seu email. Quando o usuário clicar no botão enviar, a página deve ser atualizada para incluir um texto no formato "Bem vindo <email digitado pelo participante>!".

## 2. Instruções - é hora de programar!
Siga as instruções abaixo para iniciar o seu projeto. Se é a primeira vez que você está utilizando ferramentas como essa, pode ser que tudo isso seja muita coisa. Tudo bem! Estamos aqui para te ajudar nesse aprendizado, basta entrar em contato no nosso Slack que ajudaremos. Como já falamos, parte do dia-a-dia de desenvolvedores de software é enfrentar esses desafios - e avaliaremos como cada participante encara isso no nosso processo seletivo. Aqui, o seu esforço importa muito mais que o resultado final, fique tranquil@ :)

### 2.1 Iniciando o projeto
Para iniciar o projeto, o primeiro passo é se registrar no Repl.it clicando no botão "Sign Up" do canto direito superior da sua tela. Em seguida, clicar no botão "Fork" acima. Isso criará uma cópia sua de todos os esses arquivos. Tudo que você fizer a partir desse momento será automaticamente salvo na sua conta.

É importante que você siga esse primeiro passo atentamente para não perder o progresso realizado!

### 2.2 Editando e testando o seu projeto
Para testar o seu projeto, basta clicar no arquivo index.html e, seguida, no botão "Run". Toda vez que você quiser testar o seu projeto, basta clicar novamente e dar uma olhada em como o seu site está ficando. Para fazer uma alteração no seu site, basta alterar o código no editor de texto e ele será salvo automaticamente. Esse procedimento vai ser realizado várias vezes, até que você fique satisfeito com o seu site. Programar é isso: iterar dezenas de vezes, quebrar a cara, superar bloqueios que parecem impossíveis, mas depois ficar feliz por ter construído algo com a sua personalidade :)

Lembrando: se você teve alguma dificuldade aqui, não hesite em nos procurar! Sabemos que essas primeiras vezes são cheias de entraves por questão de detalhes, e estamos do seu lado para ajudar nesse primeiro mergulho :)

### 2.3 Entregando seu projeto 
O projeto terá uma data limite combinada préviamento. Para realizar a entrega, responda o formulário https://labenu.typeform.com/to/TTn3fS preenchendo as informações corretas e enviando o link obtido  através do botão share > copy repl link no canto superior direito da tela do repl.it
Assim que terminar o seu projeto você já pode entregá-lo e marcar sua entrevista! Não precisa esperar a até a data limite de entrega!

## 3. Documentação e referências
### 3.1 W3School
Toda a documentação necessária para completar o projeto pode ser encontrada no site da w3school. Os seguintes links são recomendados:  
- https://www.w3schools.com/html/default.asp 
- https://www.w3schools.com/css/default.asp
- https://www.w3schools.com/js/default.asp
- https://internetingishard.com/html-and-css/
Os participantes podem acessar outras referências encontradas na internet.
### 3.2 Wireframe e Referências
O arquivo wireframe.png deve ser utilizado como referência para a criação do projeto. 

## 4. E agora? O que fazer?
Sabemos que aprender a programar pode ser muito desafiador. Aqui seguem algumas dicas de como seguir no desafio de criar um site:  
- Vá seguindo os tutoriais da w3schools.com .  
Para esse projeto sugerimos que você siga o tutorial de html (https://www.w3schools.com/html/default.asp) até o item HTML Javascript (https://www.w3schools.com/html/html_scripts.asp), e a seção HTML Forms (https://www.w3schools.com/html/html_forms.asp).  
Sugerimos que você siga o tutorial de css (https://www.w3schools.com/css/default.asp) até o item CSS align (https://www.w3schools.com/css/css_align.asp).  
Sugerimos que você siga o tutorial de JavaScript (https://www.w3schools.com/js/default.asp) até o item JS String Methods (https://www.w3schools.com/js/js_string_methods.asp).  
- Use o Slack para interagir com os nossos instrutores e com os demais alunos. Estamos aqui para ajudar você nessa jornada, e avaliaremos positivamente a interação dos alunos por Slack. Lembre que a nossa equipe precisa de um tempo de resposta para atender todos os alunos e as demais tarefas da nossa empresa, aproveite esse tempo para tentar superar seus desafios individualmente.  
- Se você não sabe qual o próximo passo no seu projeto, pense em uma pequena parte do site que esteja faltando ou que precise ser melhorada. Coloque como desafio resolver apenas essa parte do site e foque nesse desafio até resolvê-lo. Por exemplo, um texto do meu site está azul, mas ele deveria ser vermelho. Meu próximo desafio é fazer que esse texto azul se torne vermelho, e eu vou focar nesse desafio até que o texto esteja correto.  
- Reforçamos: estamos avaliando muito mais o seu esforço do que seu resultado final. Vocês terão aulas conosco de HTML e CSS durante o programa, caso aprovados, portanto não estamos exigindo nenhum domínio especial ou excelência no assunto. Queremos mais é verificar sua capacidade de correr atrás por conta própria e lidar com desafios :)   