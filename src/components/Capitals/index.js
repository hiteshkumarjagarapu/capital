import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

export default class Capitals extends Component {
  state = {values: countryAndCapitalsList[0].id}

  onCapital = event => {
    this.setState({values: event.target.value})
  }

  getCountry = () => {
    const {values} = this.state
    const res = countryAndCapitalsList.find(each => each.id === values)
    return res
  }

  render() {
    const {values} = this.state
    const result = this.getCountry(values)

    return (
      <div className="bg bg2">
        <div className="bgg">
          <h1>Countries and Capitals</h1>
          <div className="bg3">
            <select onChange={this.onCapital} value={values}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>

            <p>is capital of which country?</p>
          </div>
          <p>{result.country}</p>
        </div>
      </div>
    )
  }
}
