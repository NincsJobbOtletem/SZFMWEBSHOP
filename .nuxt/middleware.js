const middleware = {}

middleware['log'] = require('../middleware/log.js')
middleware['log'] = middleware['log'].default || middleware['log']

export default middleware
