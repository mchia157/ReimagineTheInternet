import './App.css';
import {motion} from 'framer-motion';
import {NavBar} from './components/NavBar';
import {Intro} from './components/Intro';
import {History} from './components/History';
import {Etymology} from './components/Etymology';
import {Characteristics} from './components/Characteristics';
import {Breeds} from './components/Breeds';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <History/>
      <Etymology/>
      <Characteristics/>
      <Breeds/>
    </div>
  );
}

export default App;
