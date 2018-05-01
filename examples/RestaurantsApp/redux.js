import { combineReducers } from 'redux'

const NAV_PUSH = 'NAV_PUSH'
const NAV_POP = 'NAV_POP'

const initialNavState = {
  index: 0,
  routes: [{ key: 'RestaurantsList' }]
}

function navigationState(state = initialNavState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  navigationState
})

export function navigatePush(route, props) {
  return {
    type: NAV_PUSH,
    state: {
      ...route,
      props
    }
  }
}

export function navigatePop() {
  return {
    type: NAV_POP
  }
}
