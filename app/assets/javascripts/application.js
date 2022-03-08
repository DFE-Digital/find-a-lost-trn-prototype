import accessibleAutocomplete from 'accessible-autocomplete'

// Sass entry point for rollup.js
import '../stylesheets/application.scss'

// Import GOV.UK Frontend
import GOVUKFrontend from 'govuk-frontend'

// Import GOV.UK Prototype Rig
import GOVUKPrototypeComponents from 'govuk-prototype-components'

// Initiate scripts on page load
document.addEventListener('DOMContentLoaded', () => {
  GOVUKFrontend.initAll()
  GOVUKPrototypeComponents.initAll()

  const autocompleteContainer = document.getElementById('itt-autocomplete-container')

  if (autocompleteContainer) {
    const searchProviders = (query, populateResults) => {
      window.fetch(`/api/itt/?search=${query}`)
        .then(response => response.json())
        .then(data => {
          populateResults(data)
        })
    }

    accessibleAutocomplete({
      element: autocompleteContainer,
      id: 'itt-autocomplete',
      name: 'itt-provider',
      defaultValue: autocompleteContainer.dataset.value,
      source: searchProviders
    })
  }
})
