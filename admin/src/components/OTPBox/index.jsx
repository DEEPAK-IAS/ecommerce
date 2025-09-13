import React, { useState, useRef } from "react";

const OTPBox = ({ length = 6, onChangeOtp }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value[0];
    setOtp(newOtp);

    if (index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    onChangeOtp(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index]) {
      if (index > 0) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="otpBox ms-1" style={{ display: "flex", gap: "8px" }}>
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputRefs.current[index] = el)}
          style={{
            width: "45px",
            height: "45px",
            textAlign: "center",
            fontSize: "17px",
          }}
        />
      ))}
    </div>
  );
};

export default OTPBox;