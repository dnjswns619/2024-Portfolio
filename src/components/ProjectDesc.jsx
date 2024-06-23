const ProjectDesc = ({data}) => {
  return (
    <div className="projectDesc">
      <div className="projectDesc__title">{data.title}</div>
        <div className="projectDesc__skill">
          <div className="projectDesc__skill--tit">Language :</div>
          <div className="projectDesc__skill--text">{data.skill.join(", ")}</div>
        </div>
        <div className="projectDesc__desc">
          <div className="projectDesc__desc--tit">Description :</div>
          <p className="projectDesc__desc--text" dangerouslySetInnerHTML={{__html: data.desc}}></p>
        </div>
        {
          data.gitLink ? 
          <div className="projectDesc__git-link">
            <div className="projectDesc__git-link--tit">GitHub: </div>
            <a href={data.gitLink} className="projectDesc__gitLink">{data.gitLink}</a>
          </div> : null
        }
    </div>
  )
}

export default ProjectDesc;