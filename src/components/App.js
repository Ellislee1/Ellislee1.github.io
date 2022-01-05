import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/app.css'
import { Outlet, Link } from "react-router-dom";


function App() {
  return (
    <div class="App" className="App">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=PT+Serif"></link>
      </head>
    <div class="page-content">
      <header>
        <nav class="navbar navbar-expand-lg navbar-dark nav-colour">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Ellis Thompson</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link active" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/cv">Digital CV</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div class="content">
            <div class="content-wrap">
              <Outlet />
            </div>
        </div>
      </main>

      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">Ellis Thompson</h5>
                    {/* <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p> */}
                    <p class="small text-muted mb-0">&copy; Ellis Thompson. All rights reserved.</p>
                </div>
                <div class="col-lg-3 col-md-6 text-center text-white">
                  <Link to="/">Home</Link> | <Link to="/cv">Digital CV</Link>
                </div>
            </div>
        </div>
    </footer>
    </div>

    </div>
  );
}

export default App;
