import { Actions } from './action';

const defaultState = {
  navigationOpen: false,
};

function portfolioReducer(state = Object.assign({}, defaultState), action) {
  switch (action.type) {
    case Actions.SET_NAVIGATION_OPEN: {
      const { navigationOpen } = action;
      return Object.assign({}, state, {
        navigationOpen,
      });
    }
    default:
      return state;
  }
}

export default portfolioReducer;
