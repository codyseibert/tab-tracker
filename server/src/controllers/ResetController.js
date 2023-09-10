const reset = require('../../seed/index')

module.exports = {
  async index (req, res) {
    try {
      console.log('hi im here')
      reset.resetDb()
      res.send({
        'message': 'Delete Finished'
      })
    } catch (err) {
      res.status(500)
      res.send(err)
    }
  }
}
