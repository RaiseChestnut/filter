module.exports = app => {
  const express = require('express')
  const router = express.Router()
  const Classify = require('../../model/Classify')


  router.post('/classify', async (req, res) => {
    const data = await Classify.create(req.body)
    res.send(data)
  })

  router.get('/classify', async (req, res) => {
    const data = await Classify.find().populate('parent').limit(10)
    res.send(data)
  })

  router.delete('/classify', async (req, res) => {
    const data = await Classify.deleteOne({
      _id: req.body._id
    })
    res.send(data)
  })

  router.put('/classify', async (req, res) => {
    const data = await Classify.updateOne({
      _id: req.body._id
    }, {
      $set: {
        name: req.body.name
      }
    })
    res.send(data)
  })

  app.use('/api', router)
}