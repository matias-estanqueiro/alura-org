import './ShowForm.css'

// I prepare the component to receive the props that arrive from the App
const ShowForm = (props) => {
    return(
        <section className='show-form'>
            <h3>My Organization</h3>
            {/* props -> updateShowForm. Call the function when the user clicks the img */}
            <img src="/img/add.png" alt="Add collaborator button" onClick={ props.updateShowForm }/>
        </section>
    );
};

export default ShowForm;