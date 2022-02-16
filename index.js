exports.add = add
exports.remove = remove
exports.has = has
exports.eq = eq
exports.lt = lt
exports.gt = gt

function cmp (a, b) {
  if (a === b) return 0
  return a < b ? -1 : 1
}

function add (list, value) {
  var top = list.push(value) - 1

  while (top) {
    if (cmp(list[top - 1], value) < 0) return
    list[top] = list[top - 1]
    list[top - 1] = value
    top--
  }
}

function lt (list, value) {
  var i = indexOf(list, value, cmp)
  if (i === -1) return -1

  for (; i >= 0; i--) {
    var c = cmp(list[i], value)
    if (c < 0) return i
  }

  return -1
}

function gt (list, value) {
  var i = indexOf(list, value, cmp)
  if (i === -1) return -1

  for (; i < list.length; i++) {
    var c = cmp(list[i], value)
    if (c > 0) return i
  }

  return -1
}

function eq (list, value) {
  var i = indexOf(list, value, cmp)
  if (i === -1) return -1
  return cmp(list[i], value) === 0 ? i : -1
}

function indexOf (list, value) {
  var len = list.length
  var top = len - 1
  var btm = 0
  var mid = -1

  while (top >= btm && btm >= 0 && top < len) {
    mid = Math.floor((top + btm) / 2)

    var c = cmp(list[mid], value)
    if (c === 0) return mid

    if (c >= 0) {
      top = mid - 1
    } else {
      btm = mid + 1
    }
  }

  return mid
}

function has (list, value) {
  return eq(list, value) > -1
}

function remove (list, value) {
  if (i === -1) return false
  list.splice(i, 1)
  return true
}
