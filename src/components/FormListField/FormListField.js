import './FormListField.css'

const FormListField = (props) => {
    const handleChange = (event) => {
        props.setValue(event.target.value);
    };

    return(
        <div className='form-list-field'>
            <label>Team</label>
            {/* hack placeholder for select  - select value - option value="" disabled defaultValue="" hidden */}
            <select value={ props.value } onChange={ handleChange }>
                <option value="" disabled defaultValue="" hidden>Enter team</option>
                {/* To go through the arrays we use the map method + return */}
                { props.teams.map((team, index) => <option key={index} value={team}>{ team }</option> )}

                {/* { teams.map((team, index) => {
                     return <option key={index}>{ team }</option>
                }) */}
            </select>
        </div>
    )
};

export default FormListField;

// flow props.team:
// 1- I create the array of objects in App
// 2- send the team titles as props to the form (map method)
// 3- within the form, I receive the props and send them to formListField also as props
// 4- I show the titles that came as a property in each option of the component (select)

// Important: prepare each component to receive the props in case they are not ready
