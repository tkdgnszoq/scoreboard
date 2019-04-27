import {UPDATE_TITLE} from "../actionTypes";

const playerInitialState = {
  title: 'Redux Scoreboard',
  players:[
    {name: 'LDK', score:0, id:1},
    {name: 'HONG', score:0, id:2},
    {name: 'KIM', score:0, id:3},
    {name: 'PARK', score:0, id:4}
  ]
}

export const playerReducer = (state = playerInitialState, action) => {
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state, title: action.title
      };

    default:
      return state;
  }
}