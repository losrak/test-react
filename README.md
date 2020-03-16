### Description

Se realizó la creación de varios componentes:
  Chart
  login
  Home
  Transfer
  NavBar

-  Chart es un componente reutilizable que se usa tanto en Home como en transfer obteniendo datos de App.js donde se concentran todos los datos en el state de este componente

- Login contiene el formulario de acceso y todos sus metodos necesarios para validar usuario y contraseña, una vez que se han verificado los datos actualiza el username que se encuentra en el state de App.js y actualiza el estado del menú activo.

- Home muestra el panel de acceso con tres bloques, para mostrar el chart pie manda a ejecutar el componente Chart pasando los datos que contiene en las props. Además genera una tabla con los datos de balance que vienen de App.js

- Transfer muestra un formulario para realizar transferencias, una chart pie y dos tablas que muestran las transferencias por cuenta origen. Mediante props se obtienen los datos para llamar el componente Chart.js y poder crear las tablas y llenar el formulario. El formulario hace las validaciones en el mismo componente y va actualizando las transactions y balance definidas en el state de App.js así que cada vez que en el formulario se haga un movimiento valido se graba en el state de App.js para que se actualicen los componentes con los nuevos datos.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
