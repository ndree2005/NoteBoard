import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import rateLimiter from './middleware/rateLimiter.js';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()


if (process.env.NODE_ENV !== "production") {
    app.use(cors({
        origin: 'http://localhost:5173',
    })
    );
}

app.use(express.json());//body parser
app.use(rateLimiter);



//app.use((req, res, next) => {
//    console.log('Request received:', req.method, req.url);
//    next();
//});

app.use('/api/notes', notesRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../FRONTEND/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../FRONTEND", "dist", "index.html"));
    });
}

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port 5001:", PORT);
    });
})


