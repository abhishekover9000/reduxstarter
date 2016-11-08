import {createStore, compose} from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// import the root reducer
import rootReducer from './reducers/index';

// import  data
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState= {
	posts : posts,
	comments : comments 
}

export default const store = createStore(rootReducer, defaultState);
// method that takes root reducer

// export cause you're using it
export const history = syncHistoryWithStore(browserHistory, store);