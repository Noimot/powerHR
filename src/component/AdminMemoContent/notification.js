import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';


function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}


export default function DirectionSnackbar() {
  const [open, setOpen] = React.useState(false);
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick(TransitionRight)}>Click to view memo</Button>
      {/* <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={transition}
        message="click to view memo"
        key={transition ? transition.name : ''}
      /> */}
    </div>
  );
}