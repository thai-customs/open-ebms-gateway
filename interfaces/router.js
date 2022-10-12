const express = require('express')
const router = express()

router.use(express.urlencoded({extended: true}))
router.use(express.json())

router.options('/', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  res.sendStatus(200)
})
router.get('/', (req, res) => {
  res.send(`${process.env.PARTY_ID} API.`)
})

module.exports = router