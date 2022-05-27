const express = require('express');
const randomId = require('random-id');
const app = express(),
      bodyParser = require("body-parser");
      port = 3070;

// place holder for the data
const widgets = [
  {
    id: "1",
    itemName: "odd",
    altName: "bit",
    description: "A small thing"
  },
  {
    id: "2",
    itemName: "end",
    altName: "bob",
    description: "A different product"
  },
  {
    id: "3",
    itemName: "device",
    altName: "gadget",
    description: "The next big thing"
  }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/vuenodejs-app/dist'));

app.get('/api/widgets', (req, res) => {
  console.log('api/widgets called!!!!!!!')
  console.log("test"+req.header("host"))

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
  res.sendFile(process.cwd() + '/vuenodejs-app/dist/index.html');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});