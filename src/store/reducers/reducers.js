import { RESET, LIFE_NUM} from '../types/types'


const Remember = (state = {}, action) => {
  switch (action.type) {
    case LIFE_NUM: {
      if (Number(action.num) === Number(action.randomNum)) {
        return {
          title: "Победаа угадал (жендин 7m)",
          description: "повтор  ",
          completed: true,
        };
      } else {
        return {
          title: "тураа эмес (не правильно) ",
          description:
            Number(action.num) > Number(action.randomNum)
              ? " берите ниже"
              : " берите выше",
          completed: false,
        };
      }
    }
    case RESET: {
      return {
        title: "",
        description: "",
        completed: false,
      };
    }
    default:
      return state;
  }
};
export default Remember;