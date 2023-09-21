import './CardCollaborator.css';
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const CardCollaborator = (props) => {
    const { id, nameValue, positionValue, pictureValue, favValue } = props.data
    const { primaryColor, deleteCollaborator, likeCollaborator } = props;

    return(
        <div className='card-collaborator'>

            <AiFillCloseCircle className='delete-collaborator' onClick={() => deleteCollaborator(id)} />
            <div className='card-header' style={{backgroundColor : primaryColor}}>
                <img src={pictureValue} alt="collaborator profile" />
            </div>
            <div className='card-info'>
                <h4>{nameValue}</h4>
                <h5>{positionValue}</h5>
                { favValue ? <AiFillHeart color='red' size='2em' onClick={() =>likeCollaborator(id)}/> : <AiOutlineHeart size='2em' onClick={() =>likeCollaborator(id)}/> }
            </div>
        </div>
    )
};

export default CardCollaborator;
