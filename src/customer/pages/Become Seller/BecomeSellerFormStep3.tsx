import { TextField } from "@mui/material";
import React from "react";

interface BecomeSellerFormStep2Props {
  formik: any; // Replace 'any' with the correct type for formik instance
}

const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep2Props> = ({
  formik,
}) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="bankDetails.accountNumber"
        label="Account Number"
        value={formik.values.bankDetails.accountNumber}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountNumber &&
          Boolean(formik.error.bankDetails?.accountNumber)
        }
        helperText={
          formik.touched.bankDetails?.accountNumber &&
          formik.error.bankDetails?.accountNumber
        }
      />
      <TextField
        fullWidth
        name="bankDetails.ifscCode"
        label="IFSC Code"
        value={formik.values.bankDetails.ifscCode}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.ifscCode &&
          Boolean(formik.error.bankDetails?.ifscCode)
        }
        helperText={
          formik.touched.bankDetails?.ifscCode &&
          formik.error.bankDetails?.ifscCode
        }
      />
      <TextField
        fullWidth
        name="bankDetails.accountHolderName"
        label="Account Holder Name"
        value={formik.values.bankDetails.accountHolderName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.bankDetails?.accountHolderName &&
          Boolean(formik.error.bankDetails?.accountHolderName)
        }
        helperText={
          formik.touched.bankDetails?.accountHolderName &&
          formik.error.bankDetails?.accountHolderName
        }
      />
    </div>
  );
};

export default BecomeSellerFormStep3;
