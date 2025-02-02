import React, { useEffect, useRef, useState } from "react";

const InfiniteLooper = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (outerRef.current && innerRef.current) {
      const outerWidth = outerRef.current.offsetWidth;
      const innerWidth = innerRef.current.scrollWidth;
      setLooperInstances(Math.ceil(outerWidth / innerWidth) + 1);
    }
  }, [children]);

  return (
    <div>
      {/* CSS in JSX */}
      <style>
        {`
          @keyframes slideAnimation {
            from {
              transform: translateX(0%);
            }
            to {
              transform: translateX(-100%);
            }
          }

          .looper {
            width: 100%;
            overflow: hidden;
          }

          .looper__innerList {
            display: flex;
            justify-content: center;
            width: fit-content;
          }

          .looper__listInstance {
            display: flex;
            width: max-content;
            animation: slideAnimation ${speed}s linear infinite;
            animation-direction: ${direction === "right" ? "reverse" : "normal"};
          }
        `}
      </style>

      {/* Looper Component */}
      <div className="looper" ref={outerRef}>
        <div className="looper__innerList" ref={innerRef}>
          {[...Array(looperInstances)].map((_, ind) => (
            <div key={ind} className="looper__listInstance">
              {children}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteLooper;
