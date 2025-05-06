export const uploadToCoudinary = async (pics: any) => {
  const cloud_name = "dw6nef7rm";
  const upload_preset = "zosh-food";

  if (pics) {
    const data = new FormData();
    data.append("file", pics);
    data.append("upload_preset", upload_preset);
    data.append("cloud_name", cloud_name);

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dw6nef7rm/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const fileDate = await res.json();
    return fileDate.url;
  } else {
    console.log("error : pics not found");
  }
};
