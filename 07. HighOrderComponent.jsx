import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';

function App({saludo, name}){
  return(
    <h1>{saludo}, {name}!</h1>
  )
}

// withSaludo un HighOrderComponent, WrappedComponent es el componente App
function withSaludo(WrappedComponent){
  return function WrappedComponentWithSaludo(saludo){
    // El último return debe ser un componente de React
    return function ComponenteDeVerdad(props){
      return(
        <Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando al WrappedComponent</p>
        </Fragment>
      )
    }
  }
}

// Llamando nuestro HOC
const AppWithSaludo=withSaludo(App);
const SendSaludo=AppWithSaludo('Holiwii');



ReactDOM.render(
  <SendSaludo name={"Manuel"}/>,
  document.getElementById('root')
);



