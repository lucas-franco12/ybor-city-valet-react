import React from 'react';

export default function ContactThingsToDo() {
  return (
    <div className="contact-things-to-do">
      <section id="contact">
        <div className="row">
          <div className="container col-md-6">
            <h3>Contact Us</h3>
            <h5>Sunday - Monday </h5>
            <p> 8:00 am - 10:00 pm: 813-361-4532 </p>
            <h5>Tuesday - Saturday </h5>
            <p> 8:00 am - 4:00 pm: 813-619-0225 </p>
            <p> 4:00 pm - 1:00 am: 352-274-1713</p>
          </div>
          <div className="container col-md-6">
            <img src="img/chicken.jpg" alt="Mural with a rooster" />
          </div>
        </div>
      </section>

      <section id="things-to-do">
        <div className="row">
        <div className="container col-md-6">
            <img src="img/ybor.jpg" alt="Lively street" />
        </div>
        <div className="container col-md-6">
            <h3>Things to Do</h3>
            <p>Ybor City is a fantastic place with a rich history and plenty of shops and restaurants to visit. Ask your valet attendant for any recommendations or click the link below to learn about things to do in Ybor City.</p>
            <button id="form-button" type="button" className="btn btn-primary"><a href="https://www.travellens.co/best-things-to-do-in-ybor-city-fl">Learn More</a></button>
        </div>
        </div>
      </section>
    </div>
  );
}

