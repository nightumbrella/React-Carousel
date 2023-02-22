import React from 'react'

const Card = () => {
   return(
    <>
    <div className="card bg-white w-[200px] h-[350px] m-2 rounded-lg shadow-lg">
      <div className="top">
        <img
          className="w-[200px] h-[350px] object-cover  p-2"
          src="https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80"
          alt="img"
        />
      </div>
    </div>
  </>
   )
}

export default Card




