import express from 'express';

import { connectDB } from './configuration/db.js';
import { person } from './models/person.js';

const app = express();
const port = 3000;

await connectDB();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello MongoDB');
});

//saving data in mongoDB (create)
app.post('/person', async (req, res) => {
  try{
  const { email, name, age } = req.body;
  //store data in db
  const newPerson = new person({ 
    email,
    name,
    age });
  await newPerson.save();
  console.log(newPerson);
  res.send('person added');
  }catch(error){
    res.send(error.message);
  }
});

//updating data in MongoDB
app.put('/person', async (req, res) => {
  const { id } = req.body;
  //findOne can be used to only display 1 doc 
  //const personData= await person.findOne({email})
  //find byId and modify/update
  const personData= await person.findByIdAndUpdate(id,{age:'21'});
  
  console.log(personData);
  res.send('person data updated');
  
});

//deleting route
app.delete('/person/:id', async (req, res) => {
  const { id } = req.params;

  await person.findByIdAndDelete(id);
  res.send('person deleted');
  
});


  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });

