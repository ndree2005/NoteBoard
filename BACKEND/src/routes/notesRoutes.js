import express from 'express';
import { createNote, getNoteById, getAllNotes, updateNote, deleteNote } from '../controllers/notesControllers.js';

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;

//app.get("/api/notes", (req, res) => {
//    res.status(200).send("you got 30 notes");
//});
//
//app.post("/api/notes", (req, res) => {
//    res.status(201).json({message: "note created successfully"});
//});
//
//app.put("/api/notes/:id", (req, res) => {
//    res.status(202).json({message: "note update successfully"});
//});
//
//app.delete("/api/notes/:id", (req, res) => {
//    res.status(202).json({message: "note delete successfully"});
//});