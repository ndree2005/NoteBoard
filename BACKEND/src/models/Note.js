import mongoose from "mongoose";

// Define the Note schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true }  //createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);
export default Note;