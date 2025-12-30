import Note from '../models/Note.js';

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 }); // Sort by createdAt in descending order
        res.status(200).json(notes);
    } catch (error) {
        console.error("error in get All notes controllers", error);
        res.status(500).json({ message: "internal server error" });
    }
};

export async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "note not found" });
        res.status(200).json(note);
    } catch (error) {
        console.error("error in get note by id controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content } = req.body;
        const note = new Note({ title, content });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("error in create note controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function updateNote(req, res) {
    try {
        const { title, content } = req.body;
        const updateNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, {
            new: true
        });
        if (!updateNote) return res.status(404).json({ message: "note not found" });

        res.status(200).json(updateNote);
    } catch (error) {
        console.error("error in update note controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) return res.status(404).json({ message: "note not found" });
        res.status(200).json({ message: "note deleted successfully" });
    } catch (error) {
        console.error("error in delete note controller", error);
        res.status(500).json({ message: "internal server error" });
    }
}