import {Exercise} from "./types.ts";
import armPic from "./imeges/arm.webp"
import legPic from "./imeges/leg.jpg"
import ranPic from "./imeges/ran.jpg"
export const exerceicesMockup: Exercise[] = [
    {
        id: '1',
        name: 'arm training',
        image: armPic,
        type: 'weight',
        description: 'pumping up muscles',
    },
    {
        id: '2',
        name: 'leg training',
        image: legPic,
        type: 'weight',
        description: 'pumping up muscles',
    },
    {
        id: '3',
        name: 'jogging',
        image: ranPic,
        type: 'time',
        description: 'pumping up muscles',
    },
]