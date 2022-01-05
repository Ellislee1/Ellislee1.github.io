import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css'
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div class="App" className="App">
      <head>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono"></link>
      </head>
    <div class="page-content">
      <header>
        <nav class="navbar navbar-expand navbar-dark bg-custom">
            <Link class="navbar-brand" to="/">Ellis Thompson</Link>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link to="/" class="nav-link" href="#">Home</Link>
                </li>
              </ul>
              <div class="navbar-right">
                <a href="./assets/Ellis_Thompson_CV.pdf" download="Ellis Thompson CV.pdf" class="btn btn-outline-light">Download CV</a>
              </div>
            </div>
        </nav>
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
