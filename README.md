# dotpath-object-create

Create an object from a dotpath string.

``` bash
npm i --save dotpath-object-create
```

## Usage

``` javascript
const createObject = require('dotpath-object-create')

createObject('machdep.xcpm.io_control_disengages')
// { machdep: { xcpm: { io_control_disengages: {} } } }

createObject('machdep.xcpm.io_control_disengages', 71)
// { machdep: { xcpm: { io_control_disengages: 71 } } }
```
