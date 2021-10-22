const express = require('express');
const app = express();
const cors = require('cors');

const port = 7000;
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Wow!! This is my first Node Express Project! I'm Excited today")
});

const users = [
  {id: 0, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 1, name:"Md Munsi Ali", usernam:'munsi-ali', email:"munsi@gmail.com", gender:'Male', age:21},
  {id: 3, name:"Riye", usernam:'riya-riya', email:"riya@gmail.com", gender:'Female', age:20},
  {id: 4, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 5, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 6, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 7, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 8, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 9, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 10, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 11, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 12, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
  {id: 13, name:"Md Ashik Ali", usernam:'ashik-ali', email:"mdashikali@gmail.com", gender:'Male', age:21},
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if(search){
    const searchResult = users.filter(user => user.usernam.includes(search.toLowerCase()));
    res.send(searchResult)
  }else{
    res.send(users);
  }
});

// daynamic data load
app.get("/users/:id", (req, res) => {
  const index = req.params.id;
  res.send(users[index]);
});

// post
app.post('/users', (req, res)=> {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log("Hitting the Post", req.body);
  res.send(JSON.stringify(newUser));
})



app.listen(port, ()=>{
  console.log("Listening The port", port);
});