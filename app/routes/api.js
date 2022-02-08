import providers from '../data/reference/itt-providers.js'

export const apiRoutes = router => {
  router.get('/api/itt/', (req, res) => {
    const query = req.query.search
    const results = providers.filter(name => normaliseName(name).indexOf(normaliseName(query).toLowerCase()) !== -1)
    res.end(JSON.stringify(results.slice(0, 100)))
  })

  const normaliseName = (name) => {
    let normalisedName = name.toLowerCase()

    // remove punctuation
    normalisedName = normalisedName.replace(/['.,/#!$%^&*;:{}=\-_`~()]/g, '')

    return normalisedName
  }
}
