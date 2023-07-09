import React from 'react'

function ErrorBox(props) {
  console.log(props);
  return (
    <div className="flex justify-start items-center border-2 border-red-200">
      
      {props.myErrors ? (
        <div>
          {console.log(props.myErrors)}
        </div>
        
        ): <span>I'm Error Box</span>
      }
    </div>
  )
}

export default ErrorBox
