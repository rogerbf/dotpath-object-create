function createObject (dotpath, value = {}) {
  if (arguments.length === 0) return Object.create({})
  const keys = dotpath.split('.').reverse()
  function nest (keys, prev) {
    if (keys.length > 0) {
      prev[keys.slice(-1)] = keys.length === 1 ? value : {}
      return nest(keys.slice(0, keys.length - 1), prev[keys.slice(-1)])
    } else {
      return n
    }
  }
  const n = {}
  return nest(keys, n)
}

module.exports = createObject
