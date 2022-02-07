const emailAddressMatchesDQTRecord = (data) => {
  return data['email-address'] === data.dqt_record['email-address']
}

const nameMatchesDQTRecord = (data) => {
  return data.features.fullName.on ? fullNameMatchesDQTRecord(data) : firstNameLastNameMatchesDQTRecord(data)
}

const fullNameMatchesDQTRecord = (data) => {
  const names = data['full-name'].split(' ')
  return names.includes(data.dqt_record['first-name']) &&
    names.includes(data.dqt_record['last-name'])
}

const firstNameLastNameMatchesDQTRecord = (data) => {
  return data['first-name'] === data.dqt_record['first-name'] &&
    data['last-name'] === data.dqt_record['last-name']
}

const dobMatchesDQTRecord = (data) => {
  return data['date-of-birth'] &&
    parseInt(data['date-of-birth'].day) === data.dqt_record['date-of-birth'].day &&
    parseInt(data['date-of-birth'].month) === data.dqt_record['date-of-birth'].month &&
    parseInt(data['date-of-birth'].year) === data.dqt_record['date-of-birth'].year
}

const ninoMatchesDQTRecord = (data) => {
  return data['national-insurance-number'] === data.dqt_record['national-insurance-number']
}

const ittProviderMatchesDQTRecord = (data) => {
  return (data['itt-provider']) === data.dqt_record['itt-provider']
}

const numberOfMatchingFieldsAgainstDQTRecord = (data) => {
  let count = 0
  if (nameMatchesDQTRecord(data)) count++
  if (dobMatchesDQTRecord(data)) count++
  if (ninoMatchesDQTRecord(data)) count++
  if (ittProviderMatchesDQTRecord(data)) count++
  return count
}

export const userMatchesDQTRecord = (data) => {
  return (emailAddressMatchesDQTRecord(data)) || numberOfMatchingFieldsAgainstDQTRecord(data) >= 3
}
