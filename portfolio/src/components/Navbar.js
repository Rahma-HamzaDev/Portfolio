import{NavLink} from "react-router-dom" 



function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Rahma Hamza</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink to='/' className="nav-link">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/Skills' className="nav-link">Skills</NavLink>

                        </li>
                        <li class="nav-item">
                          <NavLink to='/Projects' className="nav-link">Projects</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to='/contact' className="nav-link">contact</NavLink>  
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar