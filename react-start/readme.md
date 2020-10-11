![Alguém comeu a imagem](./public/logo192.png)

# Start React.js

https://pt-br.reactjs.org/docs/create-a-new-react-app.html#create-react-app

O que é React?

O React é uma biblioteca JavaScript declarativa, eficiente e flexível para criar interfaces com o 
usuário. Ele permite compor UIs complexas a partir de pequenos e isolados códigos chamados 
“componentes”.

> "A equipe React recomenda principalmente as seguintes soluções:"
>
>  + Se você está aprendendo React ou criando um novo single-page app, use Create React App."

É o que estou fazendo aqui.

### npx

Teremos que rodar algo como `npx create-react-app my-app`, então é melhor instalar o `npx`.

    npm install -g npx
    yarn global add npx

Saiba mais sobre o [npx](https://www.npmjs.com/package/npx).

Para testar, digite apenas `npx`.


### Criando sua app

    npx create-react-app my-app

![Alguém comeu a imagem](./create-app.svg)


### Executando a aplicação

    npm start
    yarn start

Você deve ver...

    Compiled successfully!

    You can now view start-reactjs in the browser.

    Local:            http://localhost:3000/
    On Your Network:  http://192.168.0.12:3000/

    Note that the development build is not optimized.
    To create a production build, use npm run build.

### Executando os testes

Maravilhoso !!!

    npm test
    yarn test

### Buildando

    npm run build
    yarn run build

Você deve ver...

    > start-reactjs@0.1.0 build /home/flavio/Documentos/code-node/start-reactjs
    > react-scripts build

    Creating an optimized production build...
    Compiled successfully.

    File sizes after gzip:

    39.85 KB  build/static/js/2.04c5b5f0.chunk.js
    781 B     build/static/js/runtime-main.a7941f46.js
    612 B     build/static/js/main.36be5ad2.chunk.js
    556 B     build/static/css/main.d1b05096.chunk.css

    The project was built assuming it is hosted at the server root.
    You can control this with the homepage field in your package.json.
    For example, add this to build it for GitHub Pages:

    "homepage" : "http://myname.github.io/myapp",

    The build folder is ready to be deployed.
    You may serve it with a static server:

    npm install -g serve
    serve -s build

    Find out more about deployment here:

    bit.ly/CRA-deploy




