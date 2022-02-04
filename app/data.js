/**
 * Default values for user session data
 *
 * These are automatically added via the `autoStoreData` middleware. A values
 * will only be added to the session if it doesn't already exist. This may be
 * useful for testing journeys where users are returning or logging in to an
 * existing application.
 */
export default {
  // Set feature flags using the `features` key
  features: {
    apiUnavailable: {
      on: true,
      name: 'API unavailable',
      description: 'Disable any functionality that requires a backend data lookup'
    },
    ittAutocomplete: {
      on: true,
      name: 'ITT provider autocomplete',
      description: 'Use an autocomplete for ITT providers, otherwise use a free text input'
    },
    fullName: {
      on: false,
      name: 'Use full name',
      description: 'Use full name rather than first name, last name'
    }
  },
  dqt_record: {
    'email-address': 'jsmith@example.com',
    'first-name': 'Jane',
    'last-name': 'Smith',
    'date-of-birth': { day: 27, month: 3, year: 1987 },
    'national-insurance-number': 'QQ 12 34 56 C',
    'itt-provider': 'Gorse SCITT',
    trn: '0000000'
  }
  // 'email-address': 'jsmith@example.com',
  // 'email-address': 'jsmith@myschool.gov.uk',
  // 'full-name': 'Jane Smith',
  // 'changed-name': 'changed-name',
  // 'previous-name': 'Jane Doe',
  // 'date-of-birth': { day: 27, month: 3, year: 1987 },
  // 'have-nino': 'yes',
  // 'national-insurance-number': 'QQ 12 34 56 C',
  // 'itt-provider': 'Gorse SCITT',
  // trn: '0000000',
  // 'has-done-itt': 'yes'
}
