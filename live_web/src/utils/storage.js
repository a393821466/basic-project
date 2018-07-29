export function isObject(x) {
  return x != null && typeof x === 'object'
}

export const get = keyName => {
  const val = sessionStorage.getItem(keyName)
  if (val) {
    return JSON.parse(val)
  }
  return undefined
}

export const getNoParser = keyName => {
  const val = sessionStorage.getItem(keyName)
  if (val) {
    return val
  }
  return undefined
}

export const set = (keyName, val) => {
  let parsedVal
  if (isObject(val)) {
    parsedVal = JSON.stringify(val)
  } else {
    parsedVal = val
  }
  window.sessionStorage.setItem(keyName, parsedVal)
}

export const each = fn => {
  for (let i = window.sessionStorage.length - 1; i >= 0; i--) {
    const key = window.sessionStorage.key(i)
    fn(get(key), key)
  }
}

export const remove = keyName => window.sessionStorage.removeItem(keyName)

export const clearALL = () => window.sessionStorage.clear()

export const removes = keys => {
  keys.forEach(key => {
    remove(key)
  })
}

export const setLocal = (keyName, val) => {
  let parsedVal
  if (isObject(val)) {
    parsedVal = JSON.stringify(val)
  } else {
    parsedVal = val
  }
  window.localStorage.setItem(keyName, parsedVal)
}

export const getLocal = keyName => {
  const val = window.localStorage.getItem(keyName)
  if (val) {
    return JSON.parse(val)
  }
  return undefined
}

export const removeLocal = keyName => window.localStorage.removeItem(keyName)

export const isTokenExists = () => get('MC_SESSION_INFO')

export const isMemberInfoExists = () => get('memberInfo')

export const getToken = () => {
  if (isTokenExists()) {
    return get('MC_SESSION_INFO').token
  }
  return ''
}
