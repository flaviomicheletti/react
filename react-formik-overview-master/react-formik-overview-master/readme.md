![](formik-logo.png)

# React Formik Overview

Installation

    npm install formik --save

    or

    yarn add formik


Execution

    yarn start


### Update Yup

Em dado momento você poderá utilizar o [Yup](https://github.com/jquense/yup) como esquema validator
(schema validation).

    npm install yup --save

    # or via yarn

    yarn add yup

Veja este exemplo https://runkit.com/jquense/yup .


### Update styled-components

No exemplo 11, por causa do erro:

    Module not found: Can't resolve '@emotion/styled' in 

Porque queremos importar `import styled from '@emotion/styled'`.

Tentei cada um dos comando abaixo (separadamente e na ordem).

    npm install --save styled-components
    npm i emotion
    npm install react-spinners --save

...mas não deram certo !

Então apaguei a pasta `node_modules` e executei...

    yarn isntall
    yarn add @emotion/core @emotion/styled

Continua com erro. Ele compila mas não abre no navegador, dá timeout.

    Script terminated by timeout at:
    invokeGuardedCallbackDev@http://localhost:3000/static/js/0.chunk.js:16630:20


### Docs

- https://jaredpalmer.com/formik/docs/overview
- https://jaredpalmer.com/formik/docs/tutorial


### See too

https://codesandbox.io/s/zKrK5YLDZ