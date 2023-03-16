import React,{useState} from 'react';
import './App.css';



function App() {
  const [deger, setDeger] = useState(0);

  function Azalt(){
    setDeger(deger-1)
  }

  const Carp =()=> {setDeger(deger * 2)}

  return (
    <div className='App'>
      <p><button onClick={()=>{setDeger(deger+1)}}>Artır</button></p>
      <p>{deger}</p>
      <p><button onClick={Azalt}>Azalt</button></p>

      <p><button onClick={Carp}>Azalt2</button></p>
    </div>
  )
}

export default App;


//<p><button onClick={()=>{console.log("Arttır Tıklandı!")}}>Artır</button></p>
//<p><button onClick={()=>{setDeger(deger-1)}}>Azalt</button></p>