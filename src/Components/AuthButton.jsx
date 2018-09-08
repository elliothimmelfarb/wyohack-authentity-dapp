import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '200px',
  },
  input: {
    display: 'none',
  },
});

function AuthButton(props) {
  const { classes, label, handleClick, subscribing } = props;

  return (
    <div>
      <Button
        size="large"
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={ handleClick }
      >
        {
          subscribing ?
          <CircularProgress
            size={20}
            color="secondary"
          /> :
          label
        }
      </Button>
    </div>
  );
}

AuthButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
AuthButton.defaultProps = {
  subscribing: false,
}

export default withStyles(styles)(AuthButton);
