import React, { Component } from 'react'
import '../styles/app.css'
import ReactLoading from 'react-loading'
import { checkStatus } from '../utils/checkStatus'
import Header from './Header'
import News from './News'

class App extends Component {
  state = {
    stories: [],
    isLoaded: false
  }

  componentDidMount() {
  const hackerStories = 'https://hacker-news.firebaseio.com/v0/topstories.json'
  const hackerUrl = 'https://hacker-news.firebaseio.com/v0/item/'

  fetch(hackerStories)
    .then(checkStatus)
    .then(data => data.json())
    .then(data => data.map(id => {
      const url = `${hackerUrl}${id}.json`
      return fetch(url).then(d => d.json())
    }))
    .then(promises => Promise.all(promises))
    .then(stories => this.setState({stories, isLoaded: true}))
  }

  render() {
    const { stories, isLoaded } = this.state
    return (
      <section>
        <Header/>
        { isLoaded ? (
          <News
            stories={stories}
          />
        ) : (
          <div className="container loader">
            <p>Loading top stories...</p>
            <ReactLoading className="container" type='spinningBubbles' color='#EC7543' height={20} width={60} />
          </div>
        ) }
      </section>
    )
  }
}

export default App
