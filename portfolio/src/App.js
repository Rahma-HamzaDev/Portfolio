import { BrowserRouter, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'


function App() {
  return (
    <div>
      <BrowserRouter>
       
        <h1>Hello</h1>
        <Navbar />
        <Route exact path ="/"  component={Home} />
        <Route path ="/contact"  component={Contact} />
        <Route path ="/Skills"  component={Skills} />
        <Route path ="/Projects"  component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
