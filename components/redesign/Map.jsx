import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <iframe
          className="embed-responsive-item"
          title="my location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14662.664234624544!2d77.41975479426222!3d23.255236028664818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69d7cf48696f%3A0xddbc57014db35da2!2sAshoka%20Garden%2C%20Bhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1711706916234!5m2!1sen!2sus" />
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
