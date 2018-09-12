import swal from "sweetalert2";

let logIn = (
  position,
  type = "success",
  title = "",
  text,
  confirmButton,
  toast,
  timer = 3000
) => {
  return swal({
    position: position || "center",
    toast: toast || false,
    type: type || "success",
    title: title,
    text: text || "",
    showConfirmButton: confirmButton || false,
    timer: timer || 1000
  });
};

export default {
  loginAlert: logIn
};
