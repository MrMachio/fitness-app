import React from 'react';
import { TrainingProgram } from './types';

interface CardProps {
    program: TrainingProgram;
}

const Card: React.FC<CardProps> = ({ program }) => {
    return (
        <div className="card">
            <h2>{program.name}</h2>
            <p>Created by: {program.createdBy}</p>
            <div>
                {program.exercises.map((exercise, index) => (
                    <div key={index}>
                        <img src={exercise.exercise.image} alt={exercise.exercise.description} />
                        <p>{exercise.exercise.description}</p>
                        <p>Repeats: {exercise.repeats}</p>
                        {exercise.weight && <p>Weight: {exercise.weight}</p>}
                        {exercise.minutes && <p>Minutes: {exercise.minutes}</p>}
                    </div>
                ))}
            </div>
            <p>Likes: {program.likes.length}</p>
        </div>
    );
};

export default Card;
