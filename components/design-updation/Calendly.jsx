import React from "react";

const Calendly = () => {
  return (
    <>
      <div className="calendly-container" style={{width:"50%", margin:"50px auto 0 auto", height:"50%"}}>
        <iframe
          title="Calendly"
          src="https://calendly.com/app/personal/availability/connected_calendars?kind=google"
          width="100%"
          height="800"
          frameBorder="0"
          scrolling="no"
          style={{ minWidth: "320px" }}
        ></iframe>
      </div>
    </>
  );
};

export default Calendly;
