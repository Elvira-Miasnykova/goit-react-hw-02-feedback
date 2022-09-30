import PropTypes from 'prop-types';
import { Box } from 'components/Box';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage }) => {
    return (
        <Box>
            <Box es="ul">
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
            </Box>
            <Box es="ul">
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
                
            </Box>
        </Box>
    );

};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};