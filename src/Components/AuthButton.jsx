import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '250px',
  },
  input: {
    display: 'none',
  },
});

function AuthButton(props) {
  const { classes, label } = props;

  return (
    <div>
      <Button size="large" variant="contained" color="primary" className={classes.button}>
        { label }
      </Button>
    </div>
  );
}

AuthButton.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(AuthButton);
