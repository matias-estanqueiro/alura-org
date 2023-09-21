import './Team.css'
import CardCollaborator from '../CardCollaborator/CardCollaborator';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {
    // const colors = {
    //     backgroundColor : props.data.secondaryColor,
    //     borderColor : props.data.primaryColor
    // }

    // destructuring
    const {id, title, primaryColor} = props.data;
    const { collaborators, deleteCollaborator, updateTeamColor, likeCollaborator } = props;

    return(
        collaborators.length > 0 &&
            <section className="team" style={{backgroundColor : hexToRgba(primaryColor, 0.4)}}>
                <input type='color' className='team-color' value={primaryColor} onChange={(event) => updateTeamColor(event.target.value, id)} />
                <h3 style={{borderColor : primaryColor}}>{title}</h3>
                <div className="collaborators">
                    {collaborators.map((collaborator, index) => <CardCollaborator key={index} data={collaborator} primaryColor={primaryColor} deleteCollaborator={deleteCollaborator} likeCollaborator={likeCollaborator} />)}
                </div>
            </section>
    );
};

export default Team;