import React from 'react';

function Envelope({ imageUrl, onChange, value }) {
  return (
    <div className="image-textbox-container">
      <img src={imageUrl} alt="Image" className="textbox-image" />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter text"
        className="textbox-input"
      />
    </div>
  );
}

export default Envelope;
