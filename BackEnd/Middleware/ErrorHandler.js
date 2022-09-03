export default function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ error: true, message: err.message||"Internal Server Error" });
}
