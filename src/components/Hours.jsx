import React from 'react';

export default function Hours() {
  return (
    <section id="hours">
      <div className="container">
        <h3>Hours</h3>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h5>Sunday</h5>
            <p>11:00 am - 7:00 pm</p>
            <p>$10</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Monday</h5>
            <p>8:00 am - 10:00 pm</p>
            <p>$10</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Tuesday</h5>
            <p>8:00 am - 10:00 pm</p>
            <p>$10</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Wednesday</h5>
            <p>8:00 am - 10:00 pm</p>
            <p>$10</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Thursday</h5>
            <p>8:00 am - 10:00 pm</p>
            <p>$10</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Friday</h5>
            <p>8:00 am - 11:00 pm</p>
            <p>$15</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Saturday</h5>
            <p>11:00 am - 1:00 am</p>
            <p>$15</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <p>Hours are subject to change. Prices are for the whole day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

