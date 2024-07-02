import React from 'react';
import card from './card';
import { TrainingProgram } from './features/exercises/types.ts';
const trainingPrograms: TrainingProgram[] = [
    {
        id: '1',
        name: 'Physical Fitness',
        createdBy: 'trainer1',
        exercises: [
            {
                exercise: {
                    image: 'path/to/image1.jpg',
                    description: 'Bench Press',
                    id: 'ex1',
                },
                repeats: 10,
                weight: 100,
            },
        ],
        likes: ['user1', 'user2'],
    },
    {
        id: '2',
        name: 'Weight Gain',
        createdBy: 'trainer2',
        exercises: [
            {
                exercise: {
                    image: 'path/to/image2.jpg',
                    description: 'Rowing Machine',
                    id: 'ex2',
                },
                repeats: 15,
                minutes: 30,
            },
        ],
        likes: ['user3', 'user4'],
    },
];