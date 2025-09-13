import React, { useState } from "react";
import OTPBox from "../../components/OTPBox";
import { Button } from "@mui/material";

const Verify = () => {
  const [otp, setOtp] = useState("");

  const handleOtpChange = (value) => {
    setOtp(value);
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    alert(otp)
  }

  return (
    <section className="section py-10">
      <div className="container">
        <div className="card shadow-md w-[400px] m-auto rounded-md bg-white p-5 px-10">
          <div className="text-center flex items-center justify-center">
            <img src="/verify3.png" alt="" width={"80"} />
          </div>
          <h3 className="text-center text-[18px] text-black mt-4 mb-3">
            Verify OTP
          </h3>

          <p className="text-center mt-0">
            OTP send to{" "}
            <span className="text-primary font-bold">
              deepaksurya2002dgl@gmail.com
            </span>
          </p>

          <form onSubmit={verifyOTP}>
            <OTPBox length={6} onChangeOtp={handleOtpChange} />

            <div className="flex items-center justify-center mt-5">
              <Button type="submit" className=" w-full btn-org btn-lg">Verify Otp</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Verify;
