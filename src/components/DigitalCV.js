import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
    return (
      <div className="DigitalCV">
          <h1>Digital CV</h1>
          <a href="./assets/Ellis_Thompson_CV.pdf" download="Ellis Thompson CV.pdf">Download</a>
          <hr/>
          <h3>Research Interests</h3>
          <div class="text-center">
            <p>Reinforcement Learning | Machine Learning | Multi-Agent Reinforcement Learning | Computer Vision</p>
            <p>Air Trafic Managament (ATM) | UAS Traffic Managament (UTM) | Autonomous Transport Systems</p>
          </div>

          <hr/>
          <h3>Education</h3>
          <div class="container">
            <div class="row">
                <div class="col">
                    <p class="item-header">George Washington University</p>
                </div>
                <div class="col justify-right">
                    <p class="font-italic">Aug 2021 - Present</p>
                </div>
            </div>
            <div class="row">
                <div class="col justify-left">
                    <p class="font-italic">Ph.D. Computer Science</p>
                </div>
                <div class="col">
                    <p class="indent-10">Advisor(s): Dr. Peng Wei</p>
                </div>
            </div>
          </div>
          <br/>
          <div class="container">
            <div class="row">
                <div class="col">
                    <p class="item-header">Swansea University</p>
                </div>
                <div class="col justify-right">
                    <p class="font-italic">Sep 2018 - June 2021</p>
                </div>
            </div>
            <div class="row">
                <div class="col justify-left">
                    <p class="font-italic">MSc. Computer Science</p>
                </div>
                <div class="col">
                    <p class="indent-10">Advisor(s): Dr. Bertie Muller</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="indent-10">Dissertation: Reinforcement Learning for Air Traffic Management</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="indent-10">Award Achieved: 1st Class (Hons)</p>
                </div>
            </div>
          </div>
          <br/>
          <div class="container">
            <div class="row">
                <div class="col">
                    <p class="item-header">University of Chester</p>
                </div>
                <div class="col justify-right">
                    <p class="font-italic">Sep 2017 - June 2018</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="indent-10">Dissertation: Reinforcement Learning for Air Traffic Management</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p class="indent-10">CertHE in Computer Science</p>
                </div>
            </div>
          </div>

          <hr/>
          <h3>Research Experience</h3>
          <div class="container">
            <div class="row">
                <div class="col">
                    <p class="item-header">George Washington University</p>
                </div>
                <div class="col justify-right">
                    <p class="font-italic">Washington, DC</p>
                </div>
            </div>
            <div class="row">
                <div class="col justify-left">
                    <p class="font-italic">Ph.D. Student &amp; Graduate Research Assistant</p>
                </div>
                <div class="col">
                    <p class="font-italic">Aug 2021 - Present</p>
                </div>
            </div>
            <div class="row">
                <div class="col ">
                    <ul>
                        <li>Designing a risk assessment based system to be part of an in-time learning-based aviation safety management system (ILASMS) for scalable advanced air mobility (AAM) on a NASA funded project.</li>
                        <li>Performing research on autonomous control systems for traffic management in the terminal airspace.</li>
                    </ul>
                </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row">
                <div class="col">
                    <p class="item-header">Swansea University</p>
                </div>
                <div class="col justify-right">
                    <p class="font-italic">Swansea, UK</p>
                </div>
            </div>
            <div class="row">
                <div class="col justify-left">
                    <p class="font-italic">MSc Student</p>
                </div>
                <div class="col">
                    <p class="font-italic">Sep 2019 - June 2021</p>
                </div>
            </div>
            <div class="row">
                <div class="col ">
                    <ul>
                        <li>Adapted an existing conflict avoidance system to utilise altitude changes to avoid conflict states between en-route aircraft.</li>
                        <li>PPerformed research into possible solutions for utilising airspace sectors for autonomous air traffic management, utilising reinforcement learning.</li>
                    </ul>
                </div>
            </div>
          </div>

          <hr/>
          <h3>Selected Courseworks</h3>
          <ul class = "list-unstyled double-col">
              <li>Machine Learning (Swansea)</li>
              <li>Big Data and Data Mining (Swansea)</li>
              <li>Data Visualisation (Swansea)</li>
              <li>Mathematics for Data Science (Swansea)</li>
          </ul>

          <hr/>
          <h3>Skills</h3>
      </div>
    );
  }
  
  export default Main;