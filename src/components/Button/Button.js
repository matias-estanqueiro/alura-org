import './Button.css'

const Button = (props) => {
    return(
        <button className='button'>{ props.caption }</button>
    );
};

export default Button;