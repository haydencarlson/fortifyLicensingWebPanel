import { createSelector } from 'reselect';

/**
 * Direct selector to the applicationPage state domain
 */
const selectApplicationPageDomain = () => (state) => state.get('applicationPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ApplicationPage
 */

const makeSelectApplicationPage = () => createSelector(
  selectApplicationPageDomain(),
  (substate) => substate.toJS()
);

export default makeSelectApplicationPage;
export {
  selectApplicationPageDomain,
};
