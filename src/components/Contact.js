import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
    return (
      <div className="Contact">
          <div class="container px-5">
            <h1 id="title">Contact</h1>

              <div class="row">
                  <div class="col-md-8 col-12">
                      <p>Feel free to reach out to me, I am happy to discuss my work, potential placements, or anything else!</p>
                      <p class="px-md-3">Location: Arlington, VA, United States</p>
                      <p class="px-md-3">Personal Email: <a href="mailto:ellisthompson.1999@outlook.com">ellisthompson.1999@outlook.com</a></p>
                      <p class="px-md-3">GWU Email: <a href="mailto:thompson_e@gwu.edu">thompson_e@gwu.edu</a></p>
                      <p class="px-md-3">Mobile: <a href="tel:+447538334917">+44 07538 334917</a></p> 
                  </div>
              </div>
          </div>      
      </div>
    );
  }
  
  export default Contact;