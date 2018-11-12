export const getObjFromArray = (array) => {
  return array.reduce((acc, item) => {
    acc[item.id] = item
    return acc
  }, {})
}

export const IDGenerator = () => {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' + s4()
}
