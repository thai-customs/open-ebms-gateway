const router = require('./interfaces/router')

router.listen(process.env.PORT, () => {
  console.log(`[${new Date().toISOString()}] Webservice port: ${process.env.PORT}`)
})