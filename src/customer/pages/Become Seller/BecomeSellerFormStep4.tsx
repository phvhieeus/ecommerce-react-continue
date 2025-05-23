import { TextField } from "@mui/material";
import React from "react";

interface BecomeSellerFormStep2Props {
  formik: any; // Replace 'any' with the correct type for formik instance
}

const BecomeSellerFormStep4 = ({ formik }: BecomeSellerFormStep2Props) => {
  return (
    <div className="space-y-5">
      <TextField
        fullWidth
        name="businessDetails.businessName"
        label="Business Name"
        value={formik.values.businessDetails.businessName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched?.businessDetails?.businessName &&
          Boolean(formik.error?.businessDetails?.businessName)
        }
        helperText={
          formik.touched?.businessDetails?.businessName &&
          formik.error?.businessDetails?.businessName
        }
      />
      <TextField
        fullWidth
        name="sellerName"
        label="Seller Name"
        value={formik.values.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sellerName && Boolean(formik.error.sellerName)}
        helperText={formik.touched.sellerName && formik.error.sellerName}
      />
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.error.email)}
        helperText={formik.touched.email && formik.error.email}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched?.password && Boolean(formik.error?.password)}
        helperText={formik.touched?.password && formik.error?.password}
      />
    </div>
  );
};

export default BecomeSellerFormStep4;
