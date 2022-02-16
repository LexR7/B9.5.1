exports.add = add
exports.remove = remove
exports.has = has
exports.eq = eq
exports.lt = lt
exports.gt = gt

function add (list, value, cmp) {
  if (!cmp) cmp = defaultCmp

  var top = list.push(value) - 1

  while (top) {
    if (cmp(list[top - 1], value) < 0) return
    list[top] = list[top - 1]
    list[top - 1] = value
    top--
  }
}

function lt (list, value, cmp) {
  if (!cmp) cmp = defaultCmp

  var i = indexOf(list, value, cmp)
  if (i === -1) return -1

  for (; i >= 0; i--) {
    var c = cmp(list[i], value)
    if (c < 0) return i
  }

  return -1
}

function gt (list, value, cmp) {
  if (!cmp) cmp = defaultCmp

  var i = indexOf(list, value, cmp)
  if (i === -1) return -1

  for (; i < list.length; i++) {
    var c = cmp(list[i], value)
    if (c > 0) return i
  }

  return -1
}

function eq (list, value, cmp) {
  if (!cmp) cmp = defaultCmp

  var i = indexOf(list, value, cmp)
  if (i === -1) return -1
  return cmp(list[i], value) === 0 ? i : -1
}

function has (list, value, cmp) {
  return eq(list, value, cmp) > -1
}

function remove (list, value, cmp) {
  var i = eq(list, value, cmp)
  if (i === -1) return false
  list.splice(i, 1)
  return true
}
