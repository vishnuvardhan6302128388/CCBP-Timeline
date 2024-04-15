import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {projectUrl, projectTitle, description, imageUrl, duration} =
    projectDetails

  return (
    <div className="project-container">
      <img src={imageUrl} alt="project" className="image" />
      <div className="title-container">
        <h1 className="title">{projectTitle}</h1>
        <div className="time-container">
          <AiFillCalendar color="gray" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <a href={projectUrl} className="link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
