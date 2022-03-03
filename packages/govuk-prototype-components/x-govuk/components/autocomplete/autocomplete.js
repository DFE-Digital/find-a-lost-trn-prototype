const accessibleAutocomplete = require('accessible-autocomplete')

module.exports = function () {
  this.start = (element) => {
    // Autocomplete options get passed from Nunjucks params to data attributes
    const params = element.dataset

    accessibleAutocomplete.enhanceSelectElement({
      selectElement: element,
      defaultValue: element.value,
      autoselect: params.autoselect === 'true',
      displayMenu: params.displayMenu,
      minLength: params.minLength ? parseInt(params.minLength) : 0,
      showAllValues: params.showAllValues === 'true',
      showNoOptionsFound: params.showNoOptionsFound === 'true'
    })
  }
}
