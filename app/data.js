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
      on: false,
      name: 'API unavailable',
      description: 'Disable any functionality that requires a backend data lookup'
    },
    trnRequired: {
      on: true,
      name: 'TRN required when checking records',
      description: 'Allow only users with a TRN to check their records'
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
    },
    validation: {
      on: false,
      name: 'Use validation',
      description: 'Show errors during journey'
    },
    sms: {
      on: true,
      name: 'TRNs by text message',
      description: 'Ask users if they want their TRN by text message'
    }
  },
  dqt_record: {
    'email-address': 'jsmith@example.com',
    'first-name': 'Jane',
    'last-name': 'Smith',
    'date-of-birth': { day: 27, month: 3, year: 1987 },
    'national-insurance-number': 'QQ 12 34 56 C',
    'itt-provider': 'Gorse SCITT',
    trn: '7651234'
  },
  support: {
    users: [
      {
        'first-name': 'Jonathan',
        'last-name': 'Doe',
        dob: '1950-01-01',
        nino: true,
        trn: 1234567,
        created: '2022-01-13',
        accessed: '2022-06-20',
        dqt: true,
        id: 14332
      },
      {
        'first-name': 'Jane',
        'last-name': 'Doe',
        dob: '1962-05-01',
        nino: true,
        trn: 5234567,
        created: '2022-04-13',
        accessed: '2022-05-20',
        dqt: false,
        id: 14335
      }
    ]
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
  // 'has-qts': 'yes'
}
