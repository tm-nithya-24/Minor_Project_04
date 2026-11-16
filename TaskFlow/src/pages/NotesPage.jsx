import { useState } from "react";
import NoteCard from "../components/NoteCard";

function NotesPage({ notes, setNotes }) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("Personal");
    const [search, setSearch] = useState("");
    const [editId, setEditId] = useState(null);

    function handleSubmit(e) {

        e.preventDefault();

        if (!title.trim() || !content.trim()) {
            alert("Please fill in all fields.");
            return;
        }

        if (editId) {

            setNotes(prev =>
                prev.map(note =>
                    note.id === editId
                        ? {
                            ...note,
                            title,
                            content,
                            category,
                            updatedAt: new Date().toISOString()
                        }
                        : note
                )
            );

            setEditId(null);

        } else {

            const newNote = {
                id: Date.now(),
                title,
                content,
                category,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            };

            setNotes(prev => [newNote, ...prev]);
        }

        setTitle("");
        setContent("");
        setCategory("Personal");
    }

    function editNote(note) {

        setTitle(note.title);
        setContent(note.content);
        setCategory(note.category);
        setEditId(note.id);
    }

    function deleteNote(id) {

        if (window.confirm("Delete this note?")) {

            setNotes(prev =>
                prev.filter(note => note.id !== id)
            );
        }
    }

    const filteredNotes = notes.filter(note =>

        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.content.toLowerCase().includes(search.toLowerCase()) ||
        note.category.toLowerCase().includes(search.toLowerCase())

    );

    return (

        <div className="page-container">

            <div className="page-intro">

                <h1>My Notes 📝</h1>

                <p>Capture your thoughts and organize your ideas.</p>

            </div>

            <form className="note-form" onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter note title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <select
                    value={category}
                    onChange={e => setCategory(e.target.value)}
                >

                    <option>Personal</option>
                    <option>Work</option>
                    <option>Study</option>
                    <option>Ideas</option>
                    <option>Important</option>

                </select>

                <textarea
                    placeholder="Write your note here..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    rows="4"
                />

                <button className="primary-btn" type="submit">

                    {editId ? "Update Note" : "+ Create Note"}

                </button>

            </form>

            <div className="search-box">

                <input
                    type="text"
                    placeholder="🔍 Search your notes..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

            </div>

            <div className="notes-grid">

                {filteredNotes.map(note => (

                    <NoteCard
                        key={note.id}
                        note={note}
                        onEdit={editNote}
                        onDelete={deleteNote}
                    />

                ))}

            </div>

            {filteredNotes.length === 0 && (

                <div className="empty-state">
                    <h2>No notes found! 📝</h2>
                    <p>Create a new note or try another search.</p>
                </div>

            )}

        </div>
    );
}

export default NotesPage;