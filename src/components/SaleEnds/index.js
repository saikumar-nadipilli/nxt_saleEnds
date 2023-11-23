import {Component} from 'react'

import './index.css'

class SaleEnds extends Component {
  state = {
    timer: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.timeChange, 1000)
  }

  timeChange = () => {
    this.setState(prevState => ({timer: prevState.timer - 1}))
  }

  render() {
    const {timer} = this.state

    return (
      <div className="sale-container">
        <h1>
          Sale Ends in <span>{timer}</span>
        </h1>
      </div>
    )
  }
}

export default SaleEnds
