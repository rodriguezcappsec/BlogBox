let apiUrl;
const endPoints = {
  production: "BACKEND DEPLOYMENT END POINT HERE",
  development: "http://localhost:4741"
};
window.location.hostname === "localhost"
  ? (apiUrl = endPoints.development)
  : (apiUrl = endPoints.production);

export default apiUrl;
