// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-container">
      <div className="title-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="time-container">
          <AiFillClockCircle color="black" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li key={each.id} className="listName">
            <p className="name">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
