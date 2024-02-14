// PhoneNumberAndOTPStep.tsx
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button, Box } from "@mui/material";
import { FormikProps } from "formik";
import { FormValues } from "../../../Types/FormTypes";

interface PhoneNumberAndOTPStepProps {
  formik: FormikProps<FormValues>;
  sendVerificationCode: (phoneNumber: string) => Promise<void>; // Assume this function initiates the sending of the OTP
  verifyOTP: (otp: string) => Promise<boolean>; // Assume this function verifies the OTP; returns true if successful
}

const PhoneNumberAndOTPStep: React.FC<PhoneNumberAndOTPStepProps> = ({
  formik,
  sendVerificationCode,
  verifyOTP,
}) => {
  const [otpSent, setOtpSent] = useState(false);
  const [canResend, setCanResend] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otpSent) {
      const timer = setTimeout(() => setCanResend(true), 30000); // 30 seconds before allowing resend
      return () => clearTimeout(timer);
    }
  }, [otpSent]);

  const handleSendVerificationCode = async () => {
    await sendVerificationCode(formik.values.phoneNumber);
    setOtpSent(true);
    setCanResend(false);
  };

  const handleResendOTP = async () => {
    setOtp("");
    setOtpSent(false);
    setCanResend(false);
    // Potentially reset formik.values.phoneNumber here if you want to allow the number to be changed
  };

  const handleVerifyOTP = async () => {
    const success = await verifyOTP(otp);
    if (success) {
      // Proceed to next step or handle verification success
    } else {
      // Handle verification failure (e.g., show an error message)
    }
  };

  return (
    <Box>
      <Typography>Enter your phone number</Typography>
      <TextField
        fullWidth
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        type="tel"
        value={formik.values.phoneNumber}
        onChange={formik.handleChange}
        disabled={otpSent}
      />
      {!otpSent && (
        <Button onClick={handleSendVerificationCode}>
          Send Verification Code
        </Button>
      )}

      {otpSent && (
        <>
          <Typography>Enter the OTP sent to your phone</Typography>
          <TextField
            fullWidth
            id="otp"
            name="otp"
            label="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <Button onClick={handleVerifyOTP}>Verify OTP</Button>
        </>
      )}

      {canResend && <Button onClick={handleResendOTP}>Resend OTP</Button>}
    </Box>
  );
};

export default PhoneNumberAndOTPStep;
