export const userResearch = router => {
  // Success
  router.get('/user-research/scenario-s/', (req, res) => {
    const data = req.session.data
    data.scenario = 's'
    data.emailMatchJourney = false
    data.successfulJourney = true
    data.features.apiUnavailable.on = false

    // Shortcut to the check answers page if they've been through the journey
    // once before
    data['full-name'] ? res.redirect('/check-answers') : res.redirect('/start')
  })

  // Failure
  router.get('/user-research/scenario-f/', (req, res) => {
    const data = req.session.data
    data.scenario = 'f'
    data.emailMatchJourney = false
    data.successfulJourney = false
    data.features.apiUnavailable.on = false

    // Shortcut to the check answers page if they've been through the journey
    // once before
    data['full-name'] ? res.redirect('/check-answers') : res.redirect('/start')
  })

  // API unavailable
  router.get('/user-research/scenario-u/', (req, res) => {
    const data = req.session.data
    data.scenario = 'u'
    data.emailMatchJourney = false
    data.successfulJourney = false
    data.features.apiUnavailable.on = true
    res.redirect('/start')
  })

  // Email match
  router.get('/user-research/scenario-e/', (req, res) => {
    const data = req.session.data
    data.scenario = 'e'
    data.emailMatchJourney = true
    data.successfulJourney = true
    data.features.apiUnavailable.on = false
    res.redirect('/start')
  })

  // First time account journey
  router.get('/user-research/scenario-1/', (req, res) => {
    const data = req.session.data
    data.identityServiceName = 'Register for a National Professional Qualification'
    data.returnToService = returnToService()
    data.scenario = '1'
    data.hasIdentity = false
    res.redirect('/get-an-identity/email')
  })

  // Has account journey
  router.get('/user-research/scenario-2/', (req, res) => {
    const data = req.session.data
    data.identityServiceName = 'Register for a National Professional Qualification'
    data.returnToService = returnToService()
    data.scenario = '2'
    data.hasIdentity = true
    res.redirect('/get-an-identity/email')
  })

  // Teacher self-serve
  router.get('/user-research/scenario-3/', (req, res) => {
    const data = req.session.data
    data.identityServiceName = 'Teacher self-service'
    data.returnToService = 'https://teacher-self-serve-prototype.herokuapp.com/v3/dashboard/index'
    data.scenario = '3'
    data.hasIdentity = false
    res.redirect('/get-an-identity/email')
  })

  const returnToService = () => {
    const isProduction = process.env.NODE_ENV === 'production'
    const domain = isProduction
      ? 'https://npq-wrapper-prototype.herokuapp.com'
      : 'http://localhost:3001'

    return `${domain}/receive-data`
  }
}
