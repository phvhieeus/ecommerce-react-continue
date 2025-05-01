import React from "react";
import { Divider } from "@mui/material";

const PricingCart = () => {
  return (
    <>
      <div className="space-y-3 p-5">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>₹ 899</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Discount</span>
          <span>₹ 699</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Shipping</span>
          <span>₹ 69</span>
        </div>

        <div className="flex justify-between items-center">
          <span>Plateform</span>
          <span>Free</span>
        </div>
      </div>
      <Divider />
      <div className="flex justify-between items-center p-5 text-primary-color">
        <span>Total</span>
        <span>₹ 799</span>
      </div>
    </>
  );
};

export default PricingCart;
