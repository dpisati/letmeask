import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';
import logoImg from '../assets/images/logo.svg';
import illustrationImg from '../assets/images/illustration.svg';

import '../styles/auth.scss'
import { database } from '../services/firebase';

export function NewRoom() {
    const { user } = useAuth();
    const history = useHistory();

    const [newRoom, setNewRom] = useState("");

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        
        if(newRoom.trim() === "") {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id,
        })

        history.push(`/rooms/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration of questions and awnsers" />
                <strong>Create rooms of Q&amp;A realtime experience.</strong>
                <p>Answer your audience questions in real-time</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Create new room</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Room name"
                            value={newRoom}
                            onChange={(event: any) => setNewRom(event.target.value)}
                        />
                        <Button type="submit">
                            Create new room
                        </Button>
                    </form>

                    <p>
                        Do you wat to enter in a existing room?<Link to="/">Click here</Link>
                    </p>


                </div>
            </main>

        </div>
    )
}