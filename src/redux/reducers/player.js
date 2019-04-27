import {ADD_PLAYER, CHANGE_SCORE, UPDATE_TITLE} from "../actionTypes";
import {removePlayer} from "../actions";

let maxId = 4;
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

    case ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, {name: action.name, score:0, id: ++maxId}]
      };
    case CHANGE_SCORE:
      const player = state.players.find((item)=>(item.id == action.index));
      player.score += action.delta;

      /*state.players.forEach(item =>{
        if(item.id === action.index) {
          item.score += action.delta;
        }
      })*/

      return {
        ...state,
        players: [...state.players]

      };

    case removePlayer:
      return {
        ...state,
        players: state.players.filter((item) => (item.index != action.index))
      }

    default:
      return state;
  }
}