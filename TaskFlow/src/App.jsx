import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import TodoPage from "./pages/TodoPage";
import NotesPage from "./pages/NotesPage";

import useLocalStorage from "./hooks/useLocalStorage";

function App() {

    const [tasks, setTasks] = useLocalStorage("taskflow_tasks", []);

    const [notes, setNotes] = useLocalStorage("taskflow_notes", []);

    return (

        <BrowserRouter>

            <div className="app-layout">

                <Sidebar />

                <main className="main-content">

                    <Header />

                    <Routes>

                        <Route
                            path="/"
                            element={
                                <Dashboard
                                    tasks={tasks}
                                    notes={notes}
                                />
                            }
                        />

                        <Route
                            path="/todos"
                            element={
                                <TodoPage
                                    tasks={tasks}
                                    setTasks={setTasks}
                                />
                            }
                        />

                        <Route
                            path="/notes"
                            element={
                                <NotesPage
                                    notes={notes}
                                    setNotes={setNotes}
                                />
                            }
                        />

                    </Routes>

                </main>

            </div>

        </BrowserRouter>
    );
}

export default App;