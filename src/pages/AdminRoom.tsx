// import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import deleteImg from '../assets/images/delete.svg';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

import '../styles/room.scss';

type RoomParams = {
    id: string
}

export function AdminRoom() {
    // const { user } = useAuth();
    const history = useHistory();
    const params = useParams<RoomParams>();    
    const roomId = params.id;
    
    const { title, questions} = useRoom(roomId);


    async function handleEndRoom() {
        if(window.confirm('Are you sure you want to end this room?')) {
            await database.ref(`rooms/${roomId}`).update({
                endedAt: new Date()
            })
            history.push('/');
        }
    }
    
    async function handleDeleteQuestion(questionId: string) {
        if(window.confirm('Are you sure you want to delete this question?')) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
        }
    }

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true
        });
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighlighted: true
        });    
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">   
                    <img src={logoImg} alt="Letmeask" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button 
                            isOutline 
                            onClick={handleEndRoom}
                        >
                            Close Room
                        </Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="room-title">
                    <h1>Room: {title}</h1>
                    {questions.length > 0 && (
                        <span>{questions.length} questions</span>
                    )}
                </div>

            </main>

            <div className="question-list">
                {questions.map((question) => {
                    return (
                        <Question 
                            key={question.id}
                            author={question.author}
                            content={question.content}
                            isAnswered={question.isAnswered}
                            isHighlighted={question.isHighlighted}
                        >
                            {!question.isAnswered && (
                                <>
                                    <button 
                                        type="button" 
                                        onClick={() => handleCheckQuestionAsAnswered(question.id)}
                                    >
                                        <img src={checkImg} alt="Check question as answered" />                                
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => handleHighlightQuestion(question.id)}
                                    >
                                        <img src={answerImg} alt="Highlight question" />                                
                                    </button>
                                </>
                            )}

                            <button 
                                type="button" 
                                onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Delete question" />                                
                            </button>
                        </Question>
                    )
                })}
            </div>
           
        </div>
    )
}