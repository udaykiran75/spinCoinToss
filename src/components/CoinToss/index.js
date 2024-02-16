import './index.css'
import {Component} from 'react'

const head = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    isToss: 0,
    total: 0,
    heads: 0,
    tails: 0,
  }

  onClickToss = () => {
    const toss = Math.floor(Math.random() * 2)
    console.log(toss)
    this.setState(prevState => ({isToss: toss, total: prevState.total + 1}))
    toss === 0
      ? this.setState(prevState => ({heads: prevState.heads + 1}))
      : this.setState(prevState => ({tails: prevState.tails + 1}))
  }

  updatingStateNumbers = isToss => {
    const findToss = isToss === 0 ? 'Head' : 'Tail'
    const imageUrl = findToss === 'Head' ? head : tail
    return imageUrl
  }

  render() {
    const {isToss, total, heads, tails} = this.state
    const onTossImage = this.updatingStateNumbers(isToss)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={onTossImage} className="imageIcon" alt="toss result" />
          <button className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
