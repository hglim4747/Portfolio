/**
 * Created by Gyu on 2016-09-25.
 */
export const Actions = {
  SET_NAVIGATION_OPEN: 'SET_NAVIGATION_OPEN',
};

export function setNavigationOpen(navigationOpen) {
  return {
    type: Actions.SET_NAVIGATION_OPEN,
    navigationOpen,
  };
}
