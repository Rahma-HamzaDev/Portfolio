import { BrowserRouter, Route , Switch } from 'react-router-dom'

import Navbar from './components/Navbar'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import SkillDetails from './Pages/SkillDetails'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className='container mt-5'>
          <Switch>
        <Route exact path ="/"  component={Home} />
        <Route path ="/contact"  component={Contact} />
        <Route exact path ="/Skills"  component={Skills} />
        <Route path ="/Projects"  component={Projects} />
        <Route path="/skills/:id" component={SkillDetails}/>
        </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
