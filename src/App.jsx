import NavPc from './components/NavPc'
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss'
import NavMb from './components/NavMb';
import Name from './components/Name';
import Bar from './components/Bar';
import Work from './components/Work';
import Skills from './components/Skills';

function App() {


  return (
    <div className="container app">
      <NavPc/>
      <NavMb/>
      <Name/>
      <Bar/>
      <Work/>
      <Skills/>
    </div>
  )
}

export default App
