import { SET_FILTER_RATED, SET_FILTER_VIEWS } from '../actions/types'


export function sortRated(){
    return{
      type:SET_FILTER_RATED,
    }
  }

  export function sortViews(){
    return{
      type:SET_FILTER_VIEWS,
    }
  }


