import { ACTIONS } from "./settings"
import { ICurrentList, IState } from "../../types"
import { findUsersService } from "../../providerServices";

export function addItem(userList: ICurrentList, index: number) {
    return {
      type: ACTIONS.add,
      list: userList,
      index
    }
}

export function setCurrentIndex(currentIndex: number) {
    return {
      type: ACTIONS.setCurrentPage,
      currentIndex
    }
}

export function addCount(index: number) {
  return {
    type: ACTIONS.addCount,
    index
  }
}

export function findUsers(query: string, page:number = 1, per_page:number=30) {
  return async (dispatch:any, getState:any) => {
    const state:IState = getState()
    const lists = state.cacheLists
    const inListIndex = lists.reduce<number>((acumulator, item, index) => { 
      return item.query === query && page === item.page?index:acumulator
    }, -1)
    if (inListIndex !== -1) {
      dispatch(addCount(inListIndex))
      dispatch(setCurrentIndex(inListIndex))
    } else {
      const response = await findUsersService(query, page, per_page)
      let indexInsert:number = lists.length
      if (indexInsert >= state.limitList) {
        indexInsert = lists.reduce<number>((acumulator, item, index, list) => { 
          return list[acumulator].count > item.count?index:acumulator
        }, 0)
      }
      dispatch(addItem({
        page,
        per_page,
        items: response.items,
        query,
        count: 1
      }, indexInsert))
      dispatch(setCurrentIndex(indexInsert))
    }
  }
}