const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('dotenv/config');



const emailsRoute = require('./routes/api/Emails');
const usersRoute = require('./routes/api/Users');
const adminsRoute = require('./routes/api/Admin');
const authRoute = require('./routes/api/Auth');


app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use('/apiv1',authRoute);
app.use('/apiv1/emails',emailsRoute);
app.use('/apiv1/admins',adminsRoute);
app.use('/apiv1/users',usersRoute);



const uri = process.env.MONGOURL;
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(uri,connectionParams)
    .then( () => {
        console.log('Connected to mongodb ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the mongodb. \n${err}`);
    })



const PORT = process.env.PORT || 8080;
app.listen(PORT,(err)=> {
    if (err) throw err
    console.log('Listening on port 8080');
  });
  