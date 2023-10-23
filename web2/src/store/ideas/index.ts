import { combineReducers } from 'redux';

import { ideas } from './reducers/ideas.reducers';

export const ideasReducers = combineReducers({ ideas });
