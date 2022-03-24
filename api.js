var request = require("request");
var DOMParser = require("xmldom").DOMParser;

const query = (Temp, elementToParse) => {
  xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wcf="http://wcf.dian.colombia">
  <soap:Header/>
  <soap:Body>
     <wcf:GetStatus>
        <!--Optional:-->
        <wcf:trackId>985893275982375983275974</wcf:trackId>
     </wcf:GetStatus>
  </soap:Body>
</soap:Envelope>`;

  options = {
    method: "POST",
    url: "http://wcf.dian.colombia/IWcfDianCustomerServices/GetStatus",
    headers: {
      'Content-Type': 'text/xml'
    },
    body: xml
  };
  return new Promise((resolve, reject) => {
    request(options, function(error, response) {
      if (error) {
        reject(new Error(error)); // reject instead of throwing, handle with `catch`
        return;
      }
      text = response.body;
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
      console.log(xmlDoc);
      xmlResult = xmlDoc.getElementsByTagName(`${elementToParse}`)[0]
        .childNodes[0].nodeValue;
      resolve(xmlDoc);
    });
  });
};
exports.query = query


const queryDian = (xml,elementToParse) => {
  xml = `<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:wcf="http://wcf.dian.colombia">
  <soap:Header/>
  <soap:Body>
     <wcf:GetStatus>
        <wcf:trackId>985893275982375983275974</wcf:trackId>
     </wcf:GetStatus>
  </soap:Body>
</soap:Envelope>`;

  options = {
    method: "POST",
    url: "http://wcf.dian.colombia/IWcfDianCustomerServices/GetStatus",
    headers: {
      'Content-Type': 'text/xml'
    },
    body: xml
  };
  return new Promise((resolve, reject) => {
    request(options, function(error, response) {
      if (error) {
        reject(new Error(error)); // reject instead of throwing, handle with `catch`
        return;
      }
      text = response.body;
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(text, "text/xml");
      console.log(xmlDoc);
      xmlResult = xmlDoc.getElementsByTagName(`${elementToParse}`)[0]
        .childNodes[0].nodeValue;
      resolve(xmlDoc);
    });
  });
};
exports.queryDian = queryDian;
