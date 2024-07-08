CREATE TABLE zettafit.comment (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    content TEXT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id UUID,
    exercise_id UUID,
    CONSTRAINT fk_author
        FOREIGN KEY(author_id)
        REFERENCES zettafit."user"(id),
    CONSTRAINT fk_exercise
        FOREIGN KEY(exercise_id)
        REFERENCES zettafit.exercise(id)
);