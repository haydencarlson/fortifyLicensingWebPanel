import { createSelector } from 'reselect';

/**
 * Direct selector to the loading state domain
 */
const selectLoadingDomain = () => (state) => state.get('loading');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Loading
 */

const makeSelectLoading = () => createSelector(
  selectLoadingDomain(),
  (substate) => substate.toJS()
);

export default makeSelectLoading;
export {
  selectLoadingDomain,
};
