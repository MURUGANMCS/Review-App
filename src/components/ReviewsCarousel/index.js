import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {displayId: 0}

  onBackWord = () => {
    const {displayId} = this.state

    if (displayId !== 0) {
      this.setState(prevState => ({displayId: prevState.displayId - 1}))
    }
  }

  onForword = () => {
    const {displayId} = this.state
    const {reviewsList} = this.props

    const lastReviewId = reviewsList.length - 1

    if (displayId !== lastReviewId) {
      this.setState(prevState => ({displayId: prevState.displayId + 1}))
    }
  }

  render() {
    const {displayId} = this.state
    const {reviewsList} = this.props
    const reviewData = reviewsList[displayId]
    const {imgUrl, username, description, companyName} = reviewData
    console.log(displayId, reviewData)
    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="user-image" />

        <div className="button-container">
          <button
            type="button"
            className="left-btn"
            onClick={this.onBackWord}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>
          <p className="user-name">{username}</p>

          <button
            type="button"
            className="right-btn"
            data-testid="rightArrow"
            onClick={this.onForword}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img"
            />
          </button>
        </div>
        <p className="user-companyName">{companyName}</p>
        <p className="user-details">{description}</p>
      </div>
    )
  }
}
export default ReviewsCarousel
