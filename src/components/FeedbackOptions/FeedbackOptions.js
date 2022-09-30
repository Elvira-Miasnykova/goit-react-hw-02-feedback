import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box es="ul">
            {options.map(option => (
                <Box es="li" key={option}>
                    <button  type="button"
                        onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </Box>
            ))
            }
        </Box>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

