import React from 'react'
import { Box } from '@mui/system'

const CreatePost = () => {
  return (
    <div className='container my-5'  > 
    
        <form>
        <div className="form-group my-5">
          <label for="exampleFormControlInput1">Title</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
  
  
          <div className="form-group my-5">
            <label for="exampleFormControlTextarea1">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </form>
        <form>
  <div className="form-group my-5 mx-1">
    <label for="exampleFormControlFile1">Please Select a file </label> 
    <input type="file" className="form-control-file mx-5" id="exampleFormControlFile1"/>
  </div>

  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
    
    

    </div>
  )
}

export default CreatePost