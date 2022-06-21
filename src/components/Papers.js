import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'

function Papers() {
    return (
    <div className="Papers">
        <title>Ellis Thompson: Papers</title>
        <div class="container px-5">
            <h1 id="title">Papers</h1>
            <h2>Conference Papers</h2>
            <hr/>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3 j-text">
                    A Survey of eVTOL Aircraft and AAM Operation Hazards
                    </div>
                    <div class="col-12 col-lg-2">
                    June - 2022
                    </div>
                    <div class="col-12 col-lg-4 j-text">
                    E.Thompson, A.Taye, W.Guo, P.Wei, M.Quinones, I.Ahmed, G.Biswas, J.Quattrocicchi, S.Carr, U.Topcu, J.Jones, M.Brittain
                    </div>
                    <div class="col-12 col-lg-2">
                    <a href="https://doi.org/10.2514/6.2022-3539">10.2514/6.2022-3539</a>
                    </div>
                    <div class="col-12 col-lg-1 justify-content-center">
                    <a href="https://drive.google.com/uc?export=download&amp;id=1xDWTyqIRn6MPmp1jwZ0RWMDckHslYcRy" target="_blank" download="Ellis Thompson CV.pdf" class="btn btn-primary dl"><i class="fa fa-download"></i></a>
                    </div>
                </div>
            </div>

        </div>      
    </div>
    );
  }
  
  export default Papers;