export const userResearch = router => {
  // Success
  router.get('/user-research/scenario-s/', (req, res) => {
    const data = req.session.data
    data.successfulJourney = true
    data.features.apiUnavailable.on = false

    // Shortcut to the check answers page if they've been through the journey
    // once before
    data['full-name'] ? res.redirect('/check-answers') : res.redirect('/start')
  })

  // Failure
  router.get('/user-research/scenario-f/', (req, res) => {
    const data = req.session.data
    data.successfulJourney = false
    data.features.apiUnavailable.on = false

    // Shortcut to the check answers page if they've been through the journey
    // once before
    data['full-name'] ? res.redirect('/check-answers') : res.redirect('/start')
  })

  // API unavailable
  router.get('/user-research/scenario-u/', (req, res) => {
    const data = req.session.data
    data.successfulJourney = false
    data.features.apiUnavailable.on = true
    res.redirect('/start')
  })
}
