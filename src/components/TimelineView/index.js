// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'

import CourseTimelineCard from '../CourseTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const renderTimeLineCard = item => {
    if (item.categoryId === 'PROJECT') {
      return <ProjectTimelineCard key={item.id} projectDetails={item} />
    }
    return <CourseTimelineCard courseDetails={item} key={item.id} />
  }

  return (
    <div className="bg-container">
      <div className="timeline-container">
        <div className="heading-container">
          <h1 className="heading">
            MY JOURNEY OF
            <br /> <h1 className="mainHeading">CCBP 4.0</h1>
          </h1>
        </div>
        <Chrono
          theme={{secondary: 'white'}}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => renderTimeLineCard(each))}
        </Chrono>
      </div>
    </div>
  )
}
export default TimelineView
