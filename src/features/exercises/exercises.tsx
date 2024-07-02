// src/exercises.tsx
import React from 'react';
import { exercisesMockup } from "./constants";
import { ExerciseCard } from "./exercise";

export const Exercises = () => {
    return (
        <div className="cards-container">
            {exercisesMockup.map(el => <ExerciseCard key={el.id} {...el} />)}
        </div>
    );
};
