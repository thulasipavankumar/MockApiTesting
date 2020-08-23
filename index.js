const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
app.use(express.json());
var dataToStore={};
app.get('/user', (req, res) => {
    const userQuery=req.query.id;
    console.log("request parameter is"+userQuery);
    console.log(dataToStore[userQuery]);
    if(dataToStore[userQuery]===undefined){
      res.status(404).json({
        message:"No such user exists in data"
      });
     
    }else{
        res.status(200).json(dataToStore[userQuery]);
    }
  
})
app.get('/', function(req, res) {
    res.sendFile('./index.html');
});

app.put('/', (req, res) => {
    const input = req.body;
    console.log(req.body)
    dataToStore[input.id]= input;
    res.status(201).json(input);
  })


  app.post(
    '/test',
    (req, res) => res.json(req.body)
  )

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})