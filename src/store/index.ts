import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { ACTIONS } from './actions/settings'
import { IState, ICurrentList } from '../types'



const initialState:IState = {
  cacheLists: [
    {
      page: 1,
      per_page: 30,
      items: [],
      query: "",
      count: 5
    }
  ],
  currentIndex: 0,
  limitList: 5
}

const reducer = (state:IState, action:any) => {
  switch (action.type) {
    case ACTIONS.add:
      return {
        ...state,
        cacheLists: state.cacheLists.slice(0, action.index).concat([
          action.list
        ].concat(state.cacheLists.slice(action.index + 1)))
      }
    
    case ACTIONS.setCurrentPage:
      return {
        ...state,
        currentIndex: action.currentIndex
      }

    case ACTIONS.addCount:
      return {
        ...state,
        cacheLists: state.cacheLists.slice(0, action.index).concat([
          {
            ...state.cacheLists[action.index],
            count: state.cacheLists[action.index].count + 1
          }
        ].concat(state.cacheLists.slice(action.index + 1)))
      }
  
    default:
      return state
  }
}

const getStore = () => {
  return createStore(
    (state:IState | any, action:any) => {
      return reducer(state, action)
    },
    initialState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}

export default getStore