import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img stroke animate"></div>
            <div className="shimmer-body">
              <div className="shimmer-title stroke animate"></div>
              <div className="shimmer-tags stroke animate"></div>
              <div className="shimmer-details">
                <div className="shimmer-rating stroke animate"></div>
                <div className="shimmer-time stroke animate"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
