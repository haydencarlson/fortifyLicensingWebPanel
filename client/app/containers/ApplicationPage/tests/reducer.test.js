
import { fromJS } from 'immutable';
import applicationPageReducer from '../reducer';

describe('applicationPageReducer', () => {
  it('returns the initial state', () => {
    expect(applicationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
