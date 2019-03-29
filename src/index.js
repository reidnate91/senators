import Senators from './data/senators'

export const republicans =() => {
  return Senators.filter(senator => senator.party === 'Republican')
}

export const democrats = () => {
  return Senators.filter(senator => senator.party === 'Democrat')
}

export const independents = () => {
  return Senators.filter(senator => senator.party === 'Independent')
 
}

export const males = () => {
  return Senators.filter( senator =>  senator.person.gender === 'male')
}

export const females = () => {
  return Senators.filter( senator =>  senator.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  return Senators.filter(senator=> senator.state === 'UT')
}

export const mapping = () => {
  return Senators.map(senator => ({
    firstName: senator.person.firstname,
    lastName: senator.person.lastname,
    gender: senator.person.gender,
    party: senator.party
  })

  )  
}

export const birthplaceSeniorSenator = () => {
  return Senators.filter(senator=> senator.state === 'UT' && senator.senator_rank === 'senior')
  .reduce ((acc,current) => current)
  
}
 
// const REPLACE_ME_WITH_CODE = false
