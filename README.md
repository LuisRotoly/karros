Aplicação teste para Verzel<br /><br />

Criada uma aplicação web como uma exposição de carros à venda. A loja se chama Karros tem vários carros usados para serem vendidos.
A página inicial já conta com todos os carros disponíveis (se houver) e uma maneira de fazer login.<br />
![home](https://github.com/LuisRotoly/karros/assets/109184689/12d43e44-dc23-4fb7-8f37-4e2193d82615)<br /><br />

Caso o usuário clique em entrar o mesmo será redirecionado a página da figura abaixo.<br />
Nesta tela o usuário pode entrar com uma conta ou criar uma conta nova.<br />
Todas as contas novas serão de usuários comuns.<br />
Para entrar como administrador basta usar o email: admin@admin.com e a senha: admin. Para o administrador todas as funcionalidades estão habilitadas.<br />
![criar](https://github.com/LuisRotoly/karros/assets/109184689/85448b55-2fad-41f6-8ab9-2e9dad81446d)<br /><br />

As funcionalidades habilitadas são:<br />
- A visualização de uma lista com todos os anúncios de carros criados<br />
![car](https://github.com/LuisRotoly/karros/assets/109184689/89d703a2-bfe1-48f9-9fab-874d85feed00)<br />
Nesta página é possível clicar no ícone para editar as informações de um carro, no icode de deletar um carro e ao final da página existe um botão para criação de um novo anúncio.<br /><br />

- A criação de um anúncio<br />
![create](https://github.com/LuisRotoly/karros/assets/109184689/54a2a9ec-b20d-47cb-a1c0-8cdea8d1b999)<br />
Basta inserir valores em todos os campos e pressionar o botão "Criar". Para inserir uma imagem, clique no quadrado com o escrito "Selecionar Foto", Caso queira trocar de foto basta clicar na foto que está sendo mostrada.<br /><br />

- A edição de um anúncio<br />
![edit](https://github.com/LuisRotoly/karros/assets/109184689/87b23197-ff10-45e8-8fb2-00a24863d30f)<br />
É possível editar qualquer informação do anúncio.<br /><br />

Caso o usuário clique em "Tenho interesse" em algum dos anúncios o usuário será redirecionado para a página de contato<br />
![contact](https://github.com/LuisRotoly/karros/assets/109184689/3122a75a-1666-4ee8-acee-741677aa644f)<br /><br />

A qualquer momento para voltar a página inicial basta clicar no logo Karros.<br /><br />

Aplicação utiliza:<br />
NPM 8.19.2<br />
React 18.2.0<br />
Java 18.0.2<br />
MySQL 8.0.30<br />
MySQL username = root<br />
MySQL password = password<br />
Após configurar o ambiente MySQL por favor utilize o sql descrito em "src/main/resources/database/db.sql". Este sql criará todo o banco com as informações necessárias para o funcionamento da aplicação.
