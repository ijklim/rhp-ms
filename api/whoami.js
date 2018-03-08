module.exports = function (req) {
  console.log(req.headers);
  let ipaddress = req.headers['x-forwarded-for'].split(',')[0];
  let language = req.headers['accept-language'].split(',')[0];
  let software = req.headers['user-agent'].match(/\(([^\)]+)\)/)[1];
  return {
    ipaddress,
    language,
    software
  };
}