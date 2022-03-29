import React,{useState} from 'react'
import './App.css';
import NewsList from './components/news list/NewsList';
import SidePanel from './components/Panel/SidePanel'


function App() {

  const[style,setStyle] = useState(true);
  const[search, setSearch] = useState('')

  return (
    <div className="App">
      <SidePanel style={style} setStyle={setStyle} />
      <NewsList style={style} />
    </div>
  );
}

export default App;
