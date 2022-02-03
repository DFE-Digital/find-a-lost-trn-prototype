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
    helpdeskOnly: {
      on: true,
      name: 'Straight to Helpdesk flow',
      description: 'Disable any functionality that requires a backend data lookup'
    },
    ittAutocomplete: {
      on: true,
      name: 'ITT provider autocomplete',
      description: 'Use an autocomplete for ITT providers, otherwise use a free text input'
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
  // 'first-name': 'Jane',
  // 'last-name': 'Smith',
  // 'changed-name': 'changed-name',
  // 'previous-first-name': 'Jane',
  // 'previous-last-name': 'Doe',
  // 'date-of-birth': { day: 27, month: 3, year: 1987 },
  // 'national-insurance-number': 'QQ 12 34 56 C',
  // 'itt-provider': 'Gorse SCITT',
  // trn: '0000000',
  // 'have-nino': 'yes',
  // 'wizard': {
  //   'has-done-itt': 'yes'
  // }
}
