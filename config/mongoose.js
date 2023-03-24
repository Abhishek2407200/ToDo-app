const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/todo_list_db',
{     useNewUrlParser: true,      useUnifiedTopology: true,     family: 4, });

const db=mongoose.connection;
db.on('error',(err)=>{
    console.log('connection error',err)
})
db.once('open',()=>{
    console.log('connect to database successfully')
})
