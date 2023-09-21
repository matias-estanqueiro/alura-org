import './FormField.css'

const FormField = (props) => {
    // To define the type of input, if a text type is not required, change the value of the property
    const { type = "text" } = props;

    // function to update the state of 'value'
    const handleChange = (event) => {
        // I access the value of the input, what is written in it
        // console.log(event.target.value);
        props.setValue(event.target.value);
    };

    return (
        <div className={`form-field form-field-${type}`}> 
            <label>{ props.labelDesc }</label>
            {/* the props that the component can use are defined */}
            <input 
                placeholder={ props.placeholder } 
                required={ props.required }
                value={ props.value }
                onChange={ handleChange }
                type={ type }
            />
        </div>
        );
};

export default FormField