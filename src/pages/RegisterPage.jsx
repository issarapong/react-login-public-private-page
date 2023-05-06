import React from 'react'

function RegisterPage() {
  return (
    <div className="container">
    <h3>Register </h3>
           <form>
           <input type="text"  placeholder="Username"/>
           <input type="text"  placeholder="Password"/>
           <button type="submit" >Signup</button>
       </form>
</div>
  )
}

export default RegisterPage