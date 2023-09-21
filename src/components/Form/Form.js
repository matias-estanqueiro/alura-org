import { useState } from 'react';
import './Form.css';
import FormField from '../FormField/FormField';
import FormListField from '../FormListField/FormListField';
import Button from '../Button/Button';

const Form = (props) => {
    //collaborator form
    const [nameValue, setNameValue] = useState("");
    const [positionValue, setPositionValue] = useState("");
    const [pictureValue, setPictureValue] = useState("");
    const [teamValue, setTeamValue] = useState("");
    //team form
    const [teamNameValue, setTeamNameValue] = useState("");
    const [teamColorValue, setTeamColorValue] = useState("#000000");

    const { registerCollaborator, registerTeam } = props;

    const handleSubmission = (event) => {
        event.preventDefault();
        const formData = {
            // nameValue : nameValue
            nameValue,
            positionValue,
            pictureValue,
            teamValue
        };
        registerCollaborator(formData);
    }

    const handleNewTeam = (event) => {
        event.preventDefault();
        const formTeamData = {
            title: teamNameValue,
            primaryColor: teamColorValue
        };
        registerTeam(formTeamData);
    }

    return (
        <section className='form'>
            <form onSubmit={handleSubmission}>
                <h2>Fill out the form to create a new collaborator</h2>
                {/* props required : the prop is defined in the component but is submitted from the form. This way of applying it. Helps component reuse */}
                <FormField 
                    labelDesc='Name' 
                    placeholder='Enter name' 
                    required={ true } 
                    value={ nameValue } 
                    setValue={ setNameValue } 
                />
                {/* only required. True is not required, if it is not found React automatically translates it as such */}
                <FormField labelDesc='Position' placeholder='Enter position' required value={ positionValue } setValue={ setPositionValue } />
                <FormField labelDesc='Picture' placeholder='Enter photo link' required value={ pictureValue } setValue={ setPictureValue } />
                <FormListField  teams={ props.teams } value={ teamValue } setValue={ setTeamValue }/>
                <Button caption='Create new collaborator' />
            </form>
            <form onSubmit={handleNewTeam}>
                <h2>Fill out the form to create a new team</h2>
                <FormField labelDesc='Team Name' placeholder='Enter team name' required value={ teamNameValue } setValue={ setTeamNameValue } />
                <FormField labelDesc='Team Color' placeholder='Enter hex code color' required value={ teamColorValue } setValue={ setTeamColorValue } type="color" />
                <Button caption='Create new team' />
            </form>
        </section>
    );
};

export default Form;