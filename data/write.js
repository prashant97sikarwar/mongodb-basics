const {MongoClient} = require('mongodb');

const MONGO_URL = 'mongodb://localhost:27017';

const DB_NAME = 'tododb';

async function writeTask(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = client.db(DB_NAME)
    
   const todos = tododb.collection('todos')
   
   const result = await todos.insertMany([
       {task: 'simple task', priority: 4, owner: 'security'},
       {task: 'completed task', priority: 1, owner: 'executive'},
       {task: 'tough task', priority: 3, owner: 'manager'},
       {task: 'okay task', priority: 2, owner: 'CEO'}
   ])
   console.log(result);
}
async function writeTask(){

}