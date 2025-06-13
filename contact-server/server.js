const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;

// Middleware për të marrë të dhënat nga forma
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Shfaqim file-in contactus.html kur bejme run serverin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../contactus.html')); 
});

// Ruajme të dhënat kur bëhet submit forma
app.post('/contact', (req, res) => {
  const { name, lastname, phonenr, email, message } = req.body;

  const content = `Emri: ${name}\nMbiemri: ${lastname}\nTel: ${phonenr}\nEmail: ${email}\nMesazhi: ${message}\n\n`;

  fs.appendFile('contact-data.txt', content, (err) => {
    if (err) {
      console.error('Gabim në ruajtjen e të dhënave:', err);
      res.status(500).send('Gabim në server');
    } else {
      res.send('Të dhënat u ruajtën me sukses!');
    }
  });
});

app.listen(port, () => {
  console.log(`Serveri po punon në http://localhost:${port}`);
});
