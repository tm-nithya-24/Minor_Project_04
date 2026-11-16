function NoteCard({ note, onEdit, onDelete }) {

    return (

        <div className="note-card">

            <div className="note-top">

                <span className="category">
                    {note.category}
                </span>

                <div>
                    <button onClick={() => onEdit(note)}>
                        ✎
                    </button>

                    <button onClick={() => onDelete(note.id)}>
                        🗑
                    </button>
                </div>

            </div>

            <h3>{note.title}</h3>

            <p>{note.content}</p>

            <div className="note-date">
                Updated: {new Date(note.updatedAt).toLocaleDateString()}
            </div>

        </div>
    );
}

export default NoteCard;