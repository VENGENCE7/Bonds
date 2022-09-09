export default function errorHandler(err, req, res, next) {
  // default status 500
  res.status(err.status || 500);
  // default message "INTERNAL SERVER ERROR"
  res.send({ error: true, message: err.message || "Internal Server Error" });
}
