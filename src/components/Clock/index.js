import {Component} from 'react'
import './index.css'

class Clock extends Component {
  // Mounting Phase
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('Constructor() Called')
  }

  componentDidMount() {
    console.log('componentDidMount() called')
    this.timerID = setInterval(this.tick, 1000)
  }

  // Unmounting Phase
  componentWillUnmount() {
    console.log('componentWillUnmount() called')
    clearInterval(this.timerID)
  }

  // Updating State
  tick = () => {
    this.setState({date: new Date()})
  }

  // Updating Phase
  render() {
    const {date} = this.state
    console.log('render() called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
