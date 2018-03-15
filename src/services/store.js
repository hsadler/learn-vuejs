
const store = {}

// public data
store.timer = 0

// protected data
store._timeInterval = null

// public methods
store.startTimer = () => {
  store._timeInterval = setInterval(() => {
    store.timer += 1
  }, 1000)
}

store.stopTimer = () => {
  clearInterval(store._timeInterval)
  store._timeInterval = null
}

export default store
