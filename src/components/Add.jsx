import AddIcon from '@mui/icons-material/Add';
import { autocompleteClasses, Button, Container, Fab, Modal, Tooltip } from '@mui/material'
import React, { useState } from 'react'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    fab:{
        position:"fixed",
        bottom:10,
        right:10

    },
    container:{
        position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
 
  
  width: 400,
  height:   '70vh',
  background: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
    }
})

const Add = () => {

    const [open,setOpen] = useState(false);

    const classes = useStyles();
  return (
    <>
    <div className={classes.fab}>
        <Tooltip title="Add" placement="bottom-end">
    <Fab color="primary" onClick={()=>setOpen(true)} >
        <AddIcon />
      </Fab>
  </Tooltip>

  
    </div>
    {/* <Modal className={classes.container} open={open} onClick={()=>setOpen(!open)}>
        <Container>
            My Modal
        </Container>
    </Modal> */}
    
    </>
  )
}

export default Add