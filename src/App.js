import React from 'react'
import {AppProvider} from './context/context'
import Nav from './components/Nav'
import AddJet from './components/AddJet';
import JetList from './components/JetList';

function App() {
  return (
    <AppProvider>
      <div className='app'>
        <Nav/>
        <AddJet/>
        <JetList/>
      </div>
    </AppProvider>
  );
}

export default App;
