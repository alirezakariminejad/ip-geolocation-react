async function getIp() {
  var response = await fetch("https://api64.ipify.org?format=json");
  var ip = (await response.json()).ip;
  return ip;
}

async function getInfo() {
  var ip = await getIp();
  var response = await fetch(`http://ipwhois.app/json/${ip}`);
  var info = await response.json();
  return info;
}

export default getInfo;
