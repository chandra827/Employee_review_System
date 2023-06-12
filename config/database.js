const mongoose = require('mongoose'); // Import the mongoose module
require('dotenv').config(); // Load environment variables from .env file

exports.connect = () => { // Export a function named 'connect'
  mongoose
    .connect(process.env.MONGODB_URL, { // Establish connection to MongoDB using the MONGODB_URL from environment variables
      useNewUrlParser: true, // Use the new URL parser
      useUnifiedTopology: true, // Use the new server discovery and monitoring engine
    })
    .then(() => { // If connection is successful
      console.log('DB CONNECTED SUCCESSFULLY'); // Log success message
    })
    .catch((err) => { // If connection fails
      console.log('DB CONNECTION FAILED'); // Log failure message
      console.log(err); // Log the error object
      process.exit(1); // Exit the process with an exit code of 1
    });
};
