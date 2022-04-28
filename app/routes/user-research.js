export const userResearch = router => {
  // Success
  router.get('/user-research/scenario-s/', (req, res) => {
    const data = req.session.data
    data.scenario = 's'
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
    data.successfulJourney = false
    data.features.apiUnavailable.on = true
    res.redirect('/start')
  })

  // First time account journey
  router.get('/user-research/scenario-1/', (req, res) => {
    const data = req.session.data
    data.accountServiceName = 'Register for a National Professional Qualification'
    data.returnToService = returnToService()
    data.scenario = '1'
    data.hasAccount = false
    res.redirect('/account/email')
  })

  // Has account journey
  router.get('/user-research/scenario-2/', (req, res) => {
    const data = req.session.data
    data.accountServiceName = 'Register for a National Professional Qualification'
    data.returnToService = returnToService()
    data.scenario = '2'
    data.hasAccount = true
    res.redirect('/account/email')
  })

  const returnToService = () => {
    const isProduction = process.env.NODE_ENV === 'production'
    const domain = isProduction
      ? 'https://npq-wrapper-prototype.herokuapp.com'
      : 'http://localhost:3001'

    return `${domain}/receive-data`
  }
}
