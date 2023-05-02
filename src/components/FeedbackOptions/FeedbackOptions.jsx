import PropTypes from 'prop-types';
import { ButtonsList, ListItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsList>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button type="button" onClick={onLeaveFeedback} value={option}>
              {option}
            </Button>
          </ListItem>
        );
      })}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
