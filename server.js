var express = require('express');
var app = express();



app.get('/', (req,res) => {
  res.send('Hello World');
});

app.get('/pets', (req,res) => {
  res.json({
    "data": {
      "pets": [
        {
          "id": 1,
          "name": "Fluffy",
          "age": 5,
          "uri": "/api/pets/1"
        }, {
          "id": 2,
          "name": "Bob",
          "age": 6,
          "uri": "/api/pets/1"
        }
      ]
    }
  }
)
})

app.get('/pets/1', (req,res) => {
  res.json({
    "id": 1,
    "name": "Fluffy",
    "age": 5,
    "type": "dog"
  }
)}
)

app.get('/pets/2', (req,res) => {
  res.json({
    "id": 2,
    "name": "Bob",
    "age": 6,
    "type": "cat"
  }
)}
)

app.listen(8000, () => {
console.log('API is running on port 8000')
});
