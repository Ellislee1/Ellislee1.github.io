import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
      <div className="Contact">
          <div class="container">
              <div class="row">
                  <div class="col-12 text-center">
                      <h1 id="title">Contact</h1>  
                  </div>
              </div>

              <div class="row justify-content-center">
                  <div class="col-md-8 t-center">
                      <p class="t-center">Feel free to reach out to me, I am happy to discuss my work, potential placements, or anything else!</p>
                      <p class="t-center">Location: Arlington, VA, United States</p>
                      <p class="t-center">Personal Email: <a href="mailto:ellisthompson.1999@outlook.com">ellisthompson.1999@outlook.com</a></p>
                      <p class="t-center">GWU Email: <a href="mailto:thompson_e@gwu.edu">thompson_e@gwu.edu</a></p>
                      <p class="t-center">Mobile: <a href="tel:+447538334917">+44 07538 334917</a></p> 
                  </div>
              </div>
          </div>      
      </div>
    );
  }
  
  export default Contact;