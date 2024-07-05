import {Component} from 'react'
import AirportDetails from '../AirportDetails'
import {v4} from 'uuid'
import AirportDatas from '../AirportDatas'
import {Button, defaultTheme, Provider, Icon} from '@adobe/react-spectrum'

import './index.css'

const initialAirportData = [
  {
    id: v4(),
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminal: '3',
  },
  {
    id: v4(),
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminal: '5',
  },
  {
    id: v4(),
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminal: '9',
  },
  {
    id: v4(),
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminal: '3',
  },
]

class HomePage extends Component {
  state = {
    airportData: initialAirportData,
    name: '',
    counrty: '',
    countryCode: '',
    terminal: '',
  }

  deleteItem = id => {
    const {airportData} = this.state
    const filteredData = airportData.filter(each => each.id !== id)
    this.setState({airportData: filteredData})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {name, counrty, counrtyCode, terminal} = this.state
    const newList = {
      id: v4(),
      name,
      counrty,
      counrtyCode,
      terminal,
    }
    this.setState(prev => ({
      airportData: [...prev.airportData, newList],
      name: '',
      counrty: '',
      counrtyCode: '',
      terminal: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }
  onChangeCountry = event => {
    this.setState({counrty: event.target.value})
  }
  onChangeCountry = event => {
    this.setState({counrtyCode: event.target.value})
  }
  onChangeTerminal = event => {
    this.setState({terminal: event.target.value})
  }
  render() {
    const {airportData} = this.state
    return (
      <div>
        <div className="nav-top">
          <img
            className="logo"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIgAAAAUCAYAAABWHnVqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARQSURBVHgB7VntceM2EH25yf+og0MqiFLBIRXcdSCmAisVGK4glwpIV2C7AtIV2KmATAW6VHDhRqC1XO0uKcq5/LDeDIYEsF9YPpAA+B2AEgf82ZfPeNtY9+WK1R/6co+3g7ovkTd8ZaXGBRHjnCS8LRAHXsb/Dhdc4OB7XHDBGLd9eRwqF4JcIFHxikWQoi8fsV+wEZ6xX6xVsLHCfnEXmV6XdW/yPV8Q/9qXbdYbQAvkL4rtkGMCs1uxeszxfmL2yC/Nhvvcdp3bH+GPQwMfW8gx8nFZiE5cTa4PcQ0bhCRsJMd2ZPUGB5tD/4bF3OVCvqsc08csyxfiRZZ/AV+QtX15Em28XEMHJW/n6FEpRZ2QMG9BuBVyBev7fcJvK3yX8BGF/l22YdnfGHbmxMVl6qxXC7lo2L8TciG3B8WG5pvLJGZX6rqGtBJFoFcLbAwEWSmBa3gyklEu8HsqQabKDuO3IGGKHFqpDf9avMHQpfZ2ge/EbNeYQZA6KyXFYe0EymVK+Ey2AooYYw09YQX0h0X93qzXEs4R4eekgp/gwojrLvtu4RMEGL+NNQJKH0VuL7EsJ4nZrjFBEHlQFnD8+YARUAvx/YLN6gFxwv9n6ASSNiscJ3KL1yHIdkLmifXJuOqZcXGCJOgEGMAf4kCgAP/BW7ZPJkhQjEql97l9N0OXEGETRNrZib4WYwJq9lrYkAQr4SPOtL1TZNaK7srQT7AJsnL6AvTxbDF/nPJ5JqtPHpTRCrtTDP6ltAWMB9/AXtF7fYQ/2D3ZjPk+Yky6m3xdO/oS5/46eDDard2W1NXkCF5cpNOwesQh15+E7G2+ro12DV7fCO+UwJaiO6NfJus6XzeivclXOSu/LPQ7B6fkRMb1jOV2b0S9yFeekw6HnLwX8t5btcNMvOZRezijX84Ymg38TUKocBhYd4LtNf4/eL4DfDQYk2g4l+I2OYnkW/5HLPf9gnMI0mE8gAg7IfRaDPDBB0vkuBM6t8I3xwb2t36Db4dnxfc5cfFPZ8R++8zRTPi2cIUTYC2GOCroi1S5AKTXWhC6Ef4uhsM6bGtnyJaKb+2M5tRFajLkWiM+eWYjiU7YwN/FDFhBz4c2Dk32WpHRzmgSk6nh7GK0IAkVdIIE6A+1xvxzEI5kyBaK7BY6kabOG/5rghSKT34OYp1U14YfK4dRka3g58SagMnxdxZBCFvYJPCKBmvGhJlxzSklfEScR5ClcdWYF4/mb8AKr3yS+hqLVPrM/IbpVfmcrZVcrBJoq9gZ8gX8LS6y7j2+LQoc70IkaKxzctLgOLc3js1f4O+ekPunZP4F/c2tWL0z5BqMZ/3fop9IQg+B3iYfMP6b+4DDX1rrzcFBZOOLqKkkks8qX3/C8R9o8h1wSPLjhL0O45xYiSTbP+R7bXKkbCeJuDrsxzTE9ZW1W6CcfGD1xpHt+vIz9iTd4LAjHP5AD39zC2aTj3E0If8BBSc0ETg+6TcAAAAASUVORK5CYII="
          />
          <img
            className="avatar"
            src="https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__"
          />
        </div>
        <hr />
        <div className="cont2">
          <div>
            <p>Home</p>
            <p>Dashboard</p>
            <p>Services</p>
            <p>Airports</p>
            <p>Videos</p>
            <p>Others</p>
            <p>List1</p>
            <p>List2</p>
          </div>
          <hr />

          <div>
            <h1>Airports</h1>
            <form onSubmit={this.onSubmitForm}>
              <p>Airport Name</p>
              <input onChange={this.onChangeName} type="text" />
              <p>country</p>
              <input onChange={this.onChangeCountry} type="text" />
              <p>country code</p>
              <input onChange={this.onChangeCode} type="text" />
              <p>Terminal</p>
              <input onChange={this.onChangeTerminal} type="text" />
              <button type="submit">Add</button>
            </form>
            <div className="heading">
              <h1>Airport Name</h1>
              <h1>Country</h1>
              <h1>Country Code</h1>
              <h1>Terminal</h1>
            </div>
            {airportData.map(each => (
              <AirportDatas
                deleteItem={this.deleteItem}
                key={each.id}
                airportData={each}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage
