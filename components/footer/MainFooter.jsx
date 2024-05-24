import React from "react";

const MainFooter = () => {
  return (
    <>
      <div className="inner">
        <div className="copy">
          <p style={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} by{" "}
            {/* <a
              href="https://themeforest.net/user/ib-themes"
              target="_blank"
              rel="noreferrer"
            >
              
            </a> */}
            Brandsmashers All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default MainFooter;