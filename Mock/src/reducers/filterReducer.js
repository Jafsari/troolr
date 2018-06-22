import { SET_FILTER_RATED, SET_FILTER_VIEWS } from '../actions/types'

const DEFAULT_STATE = {
    Rated :false,
    Viewers:false
  };

export default (state = DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_FILTER_RATED:
    return {
        Rated:true
      };
    case SET_FILTER_VIEWS:
    return{
        Viewers:true
    }
		default:
		return state;
	}
}