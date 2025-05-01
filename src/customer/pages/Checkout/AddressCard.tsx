import React from "react";
import { Radio } from "@mui/material";

const AddressCard = () => {
  const handleChange = (event: any) => {
    console.log(event.target.checked);
  };

  return (
    <div className="p-5 border rounded-md flex">
      <div>
        <Radio
          checked={true}
          onChange={handleChange}
          value=""
          name="radio-button"
        />
      </div>
      <div className="space-y-3 pt-3">
        <h1>Zosh</h1>
        <p className="w-[320px]">
          Ambavadi choke, Banglor, Banglorm, karnataka - 530068
        </p>
        <p>
          <strong>Mobile :</strong> 9023379136
        </p>
      </div>
    </div>
  );
};

export default AddressCard;
