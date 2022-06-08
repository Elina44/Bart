import logo from './logo.svg';
import './App.css';
import Avatar from './components/Avatar.js';


function App() {
  return (
    <div className="App">
      <Avatar firstName="bart" lastName="Simson" photo="https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png" alt ="photo de Bart" />
      <Avatar firstName="lisa" lastName="Simson" photo="https://www.stickees.com/files/cartoon/the-simpsons/2250-lisa-simpson-sticker.png" alt ="photo de Lisa" />
      <Avatar firstName="maggie" lastName="Simson" photo="https://www.stickees.com/files/cartoon/the-simpsons/2251-maggie-simpson-sticker.png" alt ="photo de Maggie" />
      <Avatar firstName="homer" lastName="Simson" photo="https://www.stickees.com/files/cartoon/the-simpsons/2259-garage-band-homer-sticker.png" alt ="photo d'Homer" />
      <Avatar firstName="marge" lastName="Simson" photo="https://www.stickees.com/files/cartoon/the-simpsons/2252-marge-simpson-sticker.png" alt ="photo de Marge" />
    </div>
  )
};

export default App;
