import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Route from './components/Route';
import Search from './components/Search';
import Translate from './components/Translate';
import Header from './components/Header';


const items=[
  {title:'Sabrina',
   content: 'She is beautiful.'
  },
  {title:'Jack',
  content: 'He is handsome.'
  },
  {title:'Sam',
  content: 'He is ugly.'
  }
]

const options = [
  {
    label: 'This is red',
    value: 'red'
  },
  {
    label: 'This is green',
    value: 'green'
  },
  {
    label: 'This is blue',
    value: 'blue'
  }
]



const App = ()=>{
  const [selected,setSelected]=useState(options[0])
  return(
  <div>
    <Header/>
    <Route path='/'>
      <Accordion items={items}/>
    </Route>
    <Route path='/list'>
      <Search/>
    </Route>
    <Route path='/dropdown'>
      <Dropdown
       label='Select a color'
       options={options}
       selected={selected}
       onSelectedChange={setSelected}
      />
    </Route>
    <Route path='/translate'>
      <Translate/>
    </Route>
  </div>
   
    )
}

export default App;