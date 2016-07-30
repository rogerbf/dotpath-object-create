const test = require('tape')
const createObject = require('./index.js')

test('createObject', assert => {
  assert.ok(typeof createObject === 'function')
  assert.end()
})

test('createObject()', assert => {
  assert.ok(typeof createObject() === 'object')
  assert.end()
})

test('createObject(\'machdep.xcpm.io_control_disengages\')', assert => {
  const expected = { machdep: { xcpm: { io_control_disengages: {} } } }
  const actual = createObject('machdep.xcpm.io_control_disengages')
  assert.deepLooseEqual(actual, expected)
  assert.end()
})

test('createObject(\'machdep.xcpm.io_control_disengages\', \'71\')', assert => {
  const expected = { machdep: { xcpm: { io_control_disengages: '71' } } }
  const actual = createObject('machdep.xcpm.io_control_disengages', '71')
  assert.deepLooseEqual(actual, expected)
  assert.end()
})
