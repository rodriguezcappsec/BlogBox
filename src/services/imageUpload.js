import Axios from "axios";
import Cloudinary from "cloudinary";
const imageUpload = async file => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append(
    "upload_preset",
    process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
  );
  formData.append("folder", "blogbox");
  formData.append("api_key", process.env.REACT_APP_CLOUDINARY_KEY);
  formData.append("timestamp", (Date.now() / 1000) | 0);
  return await Axios.post(
    "https://api.cloudinary.com/v1_1/lrodriguezcastro/image/upload",
    formData,
    {
      headers: {
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json",
        "content-type": "multipart/form-data"
      }
    }
  ).catch(err => {
    console.log(err);
  });
};
export default imageUpload;
