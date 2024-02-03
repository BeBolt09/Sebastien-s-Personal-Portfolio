import React, { useRef } from 'react';

const ScrollButton = () => {
  const containerRef = useRef();

  const handleScroll = () => {
    const currentScroll = containerRef.current.scrollTop;
    containerRef.current.scrollTop = currentScroll + 100;
  };

  return (
    <div ref={containerRef} style={{ height: '300px', overflowY: 'scroll' }}>
      <p>
        {/* Your content goes here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
      </p>
      <button onClick={handleScroll}>Scroll Down</button>
    </div>
  );
};

export default ScrollButton;
