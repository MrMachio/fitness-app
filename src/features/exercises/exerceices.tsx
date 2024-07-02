import {exerceicesMockup} from "./constants.ts";
import {Exercise} from "./exercise.tsx";

export const Exerceices = () => {
    return (
        <div>
            {exerceicesMockup.map(el => <Exercise key={el.id} props={el}/>)}
            </div>
    );
};