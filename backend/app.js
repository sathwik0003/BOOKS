import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import bookRoute from './routes/bookRoute.js';
import Book from "./models/bookShema.js";




const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || '5000';

dotenv.config({
    path: './config.env'
});

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log('DB connected successfully....');
    })
    .catch((err) => {
        console.error('Error in mongoose connection:', err);
    });

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    return res.status(200).send("Welcome to the React course");
});

app.use('/books', bookRoute);

// async function insertData() {
//     try {
//       // Connect to the MongoDB database
//       await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
  
//       // Your array of books
//       const books = [
//         {
//           title: "test",
//           author: "me",
//           publishYear: 2022, // Adjust the publishYear as needed
//         },
//       ];
  
//       // Insert the data into the 'books' collection
//       await Book.insertMany(books);
  
//       console.log("Data inserted successfully!");
//     } catch (error) {
//       console.error("Error inserting data:", error);
//     } finally {
//       // Close the MongoDB connection
//       mongoose.disconnect();
//     }
//   }
  
//   // Call the insertData function to insert the data
//   insertData();
  
  
  
  
  
  


