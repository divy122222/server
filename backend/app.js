const express = require('express')
const mongoose = require('mongoose')
const router = require("./routes/user-routes")
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

app.use(cors());
app.use(cookieParser())
app.use(express.json());
app.use('/api', router );
mongoose.connect("mongodb+srv://divyanshukumar736:RWwRB1CFuvFxBXnq@cluster0.ln2mfmi.mongodb.net/?retryWrites=true&w=majority").then(() => {
    app.listen(5000);
    console.log("Database is connected! Listening to localhost 5000");
  })
  .catch((err) => console.log(err));