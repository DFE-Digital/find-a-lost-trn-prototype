/**
 * @access private
 * @param {Object} req - Express request
 * @returns {string} Original query
 */
const originalQuery = (req) => {
  const originalQueryString = req.originalUrl.split('?')[1]
  return originalQueryString ? `?${originalQueryString}` : ''
}

const getFork = (forks) => {
  for (const key of Object.keys(forks)) {
    if (forks[key]()) {
      return key
    }
  }
  return false
}

/**
 * Get next, back and current paths in user journey.
 *
 * @param {Object} journey - Sequence of paths in user journey
 * @param {Object} req - Express request
 * @returns {Object} Next and back paths
 */
export const wizard = (journey, req) => {
  const data = req.session.data
  const paths = Object.keys(journey)
  const currentPath = req.path
  const query = originalQuery(req)
  const index = paths.indexOf(currentPath)
  let fork
  let next
  let back

  if (index !== -1) {
    fork = getFork(journey[currentPath])
    next = fork || paths[index + 1] || ''
    back = paths[index - 1] || ''
  }

  // Point back to where we forked from
  if (currentPath === data['forked-to']) {
    back = data['forked-from']
  }

  // Remove the saved fork if we return to it
  if (currentPath === data['forked-from'] && req.method === 'GET') {
    delete data['forked-from']
    delete data['forked-to']
  }

  // Add a new fork
  if (fork && req.method === 'POST') {
    data['forked-from'] = currentPath
    data['forked-to'] = fork
  }

  return {
    next: next && next + query,
    back: back && back + query,
    current: currentPath + query
  }
}
