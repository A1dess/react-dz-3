import { LIFE_NUM, RESET} from '../types/types'

export const resetGame = () =>  ({
    type:   RESET,
});

export const freeGame = (num, randomNum) => ({
    type: LIFE_NUM,
    num,
    randomNum,
    completed: false,
});
