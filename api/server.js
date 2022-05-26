const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
const widgets = [
  {
    id: "1",
    firstName: "first1",
    lastName: "last1",
    email: "abc@gmail.com"
  },
  {
    id: "2",
    firstName: "first2",
    lastName: "last2",
    email: "abc@gmail.com"
  },
  {
    id: "3",
    firstName: "first3",
    lastName: "last3",
    email: "abc@gmail.com"
  }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/my-app/dist'));

app.get('/api/widgets', (req, res) => {
  console.log('api/widgets called!!!!!!!')
  res.json(widgets);
});

app.post('/api/widget', (req, res) => {
  const widget = req.body.widget;
  widget.id = randomId(10);
  console.log('Adding widget:::::', widget);
  widgets.push(widget);
  res.json("widget addedd");
});

app.get('/', (req,res) => {
  res.sendFile(process.cwd() + '/my-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});