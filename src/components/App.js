import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap';
import '../styles/app.css'
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div class="App" className="App">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>  
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"></link>
      </head>
    <div class="page-content">
      <header>
        <nav class="d-md-flex d-none navbar navbar-expand navbar-dark bg-custom">
            <Link class="navbar-brand" to="/">Ellis Thompson</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link" href="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link" href="#">Contact</Link>
                </li>
              </ul>
              <div class="navbar-right">
                <a href="./assets/Ellis_Thompson_CV.pdf" download="Ellis Thompson CV.pdf" class="btn btn-outline-light"> Download CV</a>
              </div>
            </div>
        </nav>

        <div class="container d-md-none bg-custom navbar-expand navbar-dark bg-custom">
          <div class="row">
            <div class="col-12 text-center"><Link class="navbar-brand" to="/">Ellis Thompson</Link></div>
          </div>

          <div class="row text-center">
            <div class="col-12 text-center d-flex justify-content-center">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link" href="#">Home</Link>
                </li>
                <li class="nav-item">
                  <Link to="/contact" class="nav-link" href="#">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="row">
            <div class="d-flex col-12 justify-content-center"><a href="./assets/Ellis_Thompson_CV.pdf" download="Ellis Thompson CV.pdf" class="btn btn-outline-light">Download CV</a></div>
          
          </div>
        </div>
      </header>

      <main>
        <div class="content">
          <Outlet />
        </div>
      </main>
    </div>

    </div>
  );
}

export default App;
