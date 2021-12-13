
import React from 'react';
import {ImLinkedin2} from 'react-icons/im'
import {DiGithubBadge} from 'react-icons/di'
import {MdOutlineApps} from 'react-icons/md'

function TeamSection({photo, name,title, statements, profiles}) {
  return (
    <div className="card mb-5" >
      <img src={photo} className="card-img-top " alt="teamates-pict" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{title}</p>
        <p className="card-text"><small className="text-muted">{statements}</small></p>
        <a href={profiles} target= "_blank"><span ><ImLinkedin2 size="40" color="black"/></span></a>
        <a href={profiles} target= "_blank"><span ><DiGithubBadge size="40" color="black"/></span></a>
        <a href={profiles} target= "_blank"><span ><MdOutlineApps size="40" color="black"/></span></a>
      </div>
    </div>
  );
}

export default TeamSection;