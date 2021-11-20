const fs = require('fs');

const writeDataToFile = (filename, content) => {
  fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const getPostData = (req) =>
  new Promise((resolve, reject) => {
    try {
      let body = '';

      req.on('data', (chunk) => {
        body += chunk.toString();
      });

      req.on('end', () => {
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });

const errorHandler = (res, status, message) => {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  return res.end(JSON.stringify({ message }));
};

module.exports = {
  writeDataToFile,
  getPostData,
  errorHandler,
};
