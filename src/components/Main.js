import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return (
      <div className="Main">
        <div class="padding-3">
          <div class="container">
            <div class="row">
              <div class="d-none col-12 d-md-flex justify-content-center align-items-center">
                <div class="typewriter constrained">
                  <h1 id="title">Ellis Thompson</h1>
                </div>
              </div>
              <div class="d-flex col-12 d-md-none justify-content-center align-items-center">
                <div class="typewriter constrained">
                  <h1 id="title2">Ellis Thompson</h1>
                </div>
              </div>
            </div>
            <div class="row">
            <div class="d-none col-12 d-md-flex justify-content-center align-items-center">
                < h3 class="subtitle">Ph.D. Computer Science Student</h3>
              </div>
              <div class="d-flex col-12 d-md-none justify-content-center align-items-center">
                < h3 class="subtitle2">Ph.D. Computer Science Student</h3>
              </div>
            </div>
          </div>
          <br />
          <div class="container ">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-md-8 col-12">
                <p>
                  I'm Ellis, a Ph.D. candidate at George Washington University (Washington, DC), studying Computer Science. I have Masters degree in Computer Science from Swansea University (2021) and currently have a research focus in using Reinforcement Learning for Air Traffic Management (ATM).
                </p>
                <p>
                  My classes focus on related topics with a drive in Machine Learning and AI based modules but I have taken an interest in Programming (C++/C#) and Data Visualisation/Manipulation modules. 
                </p>
                <p>
                  My current advisor is <a href="https://www.seas.gwu.edu/peng-wei" target="blank_">Dr. Peng Wei</a> 
                </p>
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    );
  }
  
  export default Main;