import express,{ Application } from 'express';
import { config } from 'dotenv';

config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded( { extended:false } ));

const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`Server running on Port : ${PORT}`);
});