const express = require('express');
const app = express();
const port = 8080; // Replace with your desired port number

app.get('/numbers', (req, res) => {
  const urlValues = req.query.url;

  // If there's a single URL parameter, convert it to an array for consistency
  const urlArray = Array.isArray(urlValues) ? urlValues : [urlValues];

  console.log(urlArray);

  // Now you can use urlArray for further processing

  res.send('Received the URL values.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
