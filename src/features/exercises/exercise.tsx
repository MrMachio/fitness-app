import type {Exercise} from './types.ts'
    import './card.css';
import React from "react";
export const Exercise: React.FC<Exercise> = (props) => {
    const {id, name, description, image, type} = props;

  return (
      <div className="ExerciseCard">
          <img src={image} alt={description} className="exercise-image" />
          <div className="exercise-info">
              <h3 className="exercise-title">Exercise ID: {id}</h3>
              <p className="exercise-description">{description}</p>
          </div>
      </div>
  );
};