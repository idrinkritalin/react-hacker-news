import React from 'react'
import '../styles/news.css'
import Upvote from 'react-icons/lib/fa/caret-up'
import { TEXT_PLACEHOLDER } from '../utils/textPlaceholder'
import PropTypes from 'prop-types'

const News = (props) => (
  <div className="container-news">
    {props.stories.map((story , i) =>
      <article key={story.id}>
        <div className="story-header">
          <div className="story-score">
            <Upvote/>
            <p>{story.score}</p>
          </div>
          <div className="story-title">
            <a href={story.url}>
              <b>{story.title}</b>
            </a>
            <p>by <i>{story.by}</i></p>
          </div>
        </div>
        <p>{TEXT_PLACEHOLDER}</p>
      </article>
    )}
  </div>
)

News.propTypes = {
  stories: PropTypes.array.isRequired
}

export default News
