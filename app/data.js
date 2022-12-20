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

  'first-name': 'Francis',
  'last-name': 'Smith',
  'date-of-birth': { day: 27, month: 3, year: 1987 },
  'full-name': 'Francis Smith',
  'preferred-name': 'Fran Smith',
  'preferred-first-name': 'Fran',
  'preferred-last-name': 'Smith',
  features: {
    validation: {
      on: false,
      name: 'Use validation',
      description: 'Show errors during journey'
    },
    newAuth: {
      on: false,
      name: 'GAI concept auth journey',
      description: 'Display GAI concept journey'
    },
    noMatchJourney: {
      on: false,
      name: 'Get an identity: Show the No match page',
      description: 'Include the ‘no match’ page in the journey'
    },
    replacingEmail: {
      on: false,
      name: 'Get an identity: Existing email doest not match',
      description: 'Test the journey when a user matches an existing account but they used a different email address'
    },
    apiUnavailable: {
      on: false,
      name: 'Find: API unavailable',
      description: 'Disable any functionality that requires a backend data lookup'
    },
    fullName: {
      on: false,
      name: 'Find: Use full name',
      description: 'Use full name rather than first name, last name'
    },
    sms: {
      on: false,
      name: 'Find: TRNs by text message',
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
    users: {
      100: {
        id: '100',
        name: {
          'first-name': 'Jonathan',
          'last-name': 'Doe',
          verified: true,
          'verified-on': '2022-01-13',
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'jon.doe@example.com',
        'inactive-dqt': {
          'first-name': 'Keanu',
          'last-name': 'Greeves',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      124: {
        id: '124',
        name: {
          'first-name': 'Jane',
          'last-name': 'Smith',
          verified: false,
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'jane.smith@example.com',
        'inactive-dqt': {
          'first-name': 'Keanu',
          'last-name': 'Greeves',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      101: {
        id: '101',
        name: {
          'first-name': 'Keanu',
          'last-name': 'Greeves',
          from: 'Register for an NPQ',
          created: '2022-03-12'
        },
        created: '2022-03-12',
        accessed: '2022-03-12',
        email: 'keanu.greeves@example.com',
        'inactive-dqt': {
          'first-name': 'Keanu',
          'last-name': 'Greeves',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      }
    }
  },
  supportHasDQT: {
    users: {
      100: {
        id: '100',
        name: {
          'first-name': 'Mary',
          'last-name': 'Deane',
          verified: true,
          'verified-on': '2022-01-13',
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'jon.doe@schoolemail.com',
        dqt: {
          'first-name': 'Mary',
          'last-name': 'Dean',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      126: {
        id: '126',
        name: {
          'first-name': 'Leo',
          'last-name': 'Graham',
          verified: true,
          'verified-on': '2022-01-13',
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'leo-king@hotmail.com',
        dqt: {
          'first-name': 'Leo',
          'last-name': 'Graham',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      132: {
        id: '132',
        name: {
          'first-name': 'Neil',
          'last-name': 'Thomas',
          verified: true,
          'verified-on': '2022-01-13',
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'thommo@outlook.com',
        dqt: {
          'first-name': 'Neil',
          'last-name': 'Thomas',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      131: {
        id: '131',
        name: {
          'first-name': 'Florence',
          'last-name': 'Roberts',
          verified: true,
          'verified-on': '2022-01-13',
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'flojo@hotmail.com'
      },
      129: {
        id: '129',
        name: {
          'first-name': 'Barry',
          'last-name': 'King',
          verified: false,
          from: 'Register for an NPQ',
          created: '2022-01-13'
        },
        created: '2022-01-13',
        accessed: '2022-06-20',
        email: 'barry.king@example.com',
        dqt: {
          'first-name': 'Barry',
          'last-name': 'King',
          dob: '1950-01-01',
          nino: true,
          trn: '1234567'
        }
      },
      128: {
        id: '128',
        name: {
          'first-name': 'Sam',
          'last-name': 'Jones',
          from: 'Register for an NPQ',
          created: '2022-03-12'
        },
        created: '2022-03-12',
        accessed: '2022-03-12',
        email: 'Sam.jones@example.com'
      }
    }
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
