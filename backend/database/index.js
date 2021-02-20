const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://kylenelson:50nl4Jszxvvca53Z@launches.0bygc.mongodb.net/rockets',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .catch(e => console.log('Connection error', e.message));

const db = mongoose.connection;


module.exports = db;