import React from 'react';
import DataPage from './components/DataPage';
import './App.css';

class App extends React.Component{
  render(){
    return(
      <div className='App'>
        <h1>Women's World Cup</h1>
        <DataPage/>
      </div>
    );
  }
}

export default App;
