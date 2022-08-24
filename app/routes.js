import express from 'express'
import { exampleWizardRoutes } from './routes/example-wizard.js'
import { getAnIdentityRoutes } from './routes/get-an-identity.js'
import { findLostTrnRoutes } from './routes/find-a-lost-trn.js'
import { npqRoutes } from './routes/npq.js'
import { supportRoutes } from './routes/support.js'
import { apiRoutes } from './routes/api.js'
import { userResearch } from './routes/user-research.js'

const router = express.Router()
exampleWizardRoutes(router)
getAnIdentityRoutes(router)
findLostTrnRoutes(router)
npqRoutes(router)
supportRoutes(router)
apiRoutes(router)
userResearch(router)

router.get('/googled9cd283f899d5c89.html', (req, res) => {
  res.render('googled9cd283f899d5c89')
})

export default router
