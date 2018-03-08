module.exports = function (req) {
  console.log(req.headers);
  return {
    ipaddress: req.headers['host'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  };
}