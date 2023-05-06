import React from 'react'

function LoginPage() {
  return (
    <div className="container">
     <h3>Login</h3>
            <form>
            <input type="text"  placeholder="Username"/>
            <input type="text"  placeholder="Password"/>
            <button type="submit" >Login</button>
        </form>
</div>

    

  )
}

export default LoginPage