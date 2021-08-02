import { useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'
import illustrationImg from '../assets/images/illustration.svg';

import '../styles/auth.scss'
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';


export function Home() {
    const history = useHistory();

    const { user, signInWithGoogle } = useAuth();
    const [ roomCode, setRoomCode ] = useState("")

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if(roomCode.trim() === "") {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            alert("Room doesn't exist!")
            return;
        }

        if(roomRef.val().endedAt) {
            alert("Room ended");
            return;
        }

        history.push(`/rooms/${roomCode}`);
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
                    <button className="create-room" onClick={handleCreateRoom}>
                        <img src={googleIconImg} alt="Google logo" />
                        Create a room with Goole
                    </button>

                    <div className="separator">
                        or enter in a room
                    </div>

                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Type the room's name"
                            value={roomCode}
                            onChange={(e: any) => setRoomCode(e.target.value)}
                        />
                        <Button type="submit">
                            Enter in the room
                        </Button>
                    </form>

                </div>
            </main>

        </div>
    )
}
