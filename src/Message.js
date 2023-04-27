import Alert from 'react-bootstrap/Alert';
import PropTypes from 'prop-types';

function Message(props) {
    return (
    <div>
    <h1>{props.text}</h1>
        <Alert variant='info'>
        Hope you enjoy!
        </Alert>
        </div>
    );
}

Message.defaultProps = {
    text: 'Default text'
    };
    

export default Message;