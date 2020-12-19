import React from 'react';
import { Link } from 'react-router-dom';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { Button } from 'react-admin';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(theme=> ({
  button :{
    marginTop: theme.spacing(1),
  
  },
  primary:{
    main:'#000ff',
  }
}))

const AddNewCommentButton = () => {

  const classes = useStyle();
 return(
  <Button
    className={classes.button}
    variant="raised"
    component={Link}
    label="Add a comment"
    title="Add a comment"
  >
    <ChatBubbleIcon />
  </Button>
)};

export default AddNewCommentButton;