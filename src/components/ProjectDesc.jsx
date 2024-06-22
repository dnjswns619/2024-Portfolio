const ProjectDesc = ({port}) => {
  console.log(port);
  return (
    <div className="projectDesc">
      <div className="projectDesc__title">{port.title}</div>
        <div className="projectDesc__skill">
          <div className="projectDesc__skill--tit">Language :</div>
          <div className="projectDesc__skill--text">{port.skill.join(", ")}</div>
        </div>
        <div className="projectDesc__desc">
          <div className="projectDesc__desc--tit">Description :</div>
          <p className="projectDesc__desc--text" dangerouslySetInnerHTML={{__html: port.desc}}></p>
        </div>
        {
          port.gitLink ? 
          <div className="projectDesc__git-link">
            <div className="projectDesc__git-link--tit">GitHub: </div>
            <a href={port.gitLink} className="projectDesc__gitLink">{port.gitLink}</a>
          </div> : null
        }
    </div>
  )
}

export default ProjectDesc;