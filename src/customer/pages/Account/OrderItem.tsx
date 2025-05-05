import { ElectricBolt } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const OrderItem = () => {
  return (
    <div className="text-sm bg-white p-5 space-y-4 border rounded-md cursor-pointer">
      <div className="flex items-center gap-5">
        <div>
          <Avatar sizes="small" sx={{ bgcolor: teal[500] }}>
            <ElectricBolt />
          </Avatar>
        </div>
        <div>
          <h1 className="font-bold text-primary-color">PENDING</h1>
          <p>Arriving By Mon, 15 Jul</p>
        </div>
      </div>

      <div className="p-5 bg-teal-50 flex gap-3">
        <div>
          <img className="w-[70px]" src="" alt="" />
        </div>
        <div className="w-full space-y-2">
          <h1 className="font-bold">Virani Clothing</h1>
          <p>
            Cellecor RAY 1.43" AMOLED Display | 700 NITS | AOD | BT-Calling | AI
            Voice | Split Screen Smartwatch (Black Strap, Free Size)
          </p>
          <p>
            <strong>Size : </strong>
            FREE
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
