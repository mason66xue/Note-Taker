const express =require('express');
const path=require('path');

//configuration for express
const app=express();

const PORT =process.env.PORT || 3000;


//set up middleware 
app.use((req, res, next)=> {
  console.log(`${req.method} request received for endpoint ${req.url}`);
  next();
}
)


//static contents
app.use(express.static('static'));

//parser for incoming data 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Get 

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/static/index.html'))
);



app.get('/notes', (req,res) => {
  console.log('GET /');
  // res.send('GET / processed');
  res.sendFile(path.join(__dirname, '/static/notes.html'));
});





// Wildcard route to direct users to a 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'static/404.html'))
);


//set up listner
app.listen(PORT,()=> console.log('server starts'))


