import React from 'react';


export default function CreateNew(){

    return(
        <section>
            <form className="new-account-form">
             <input type="text" defaultValue="username"></input>
              <br />
              <input type="text" defaultValue="password"></input>
              <br />
              <input type="text" defaultValue="confirm password"></input>
              <br />
              <button type="submit" className="bttn-new">Create Account</button>
              <br />
            </form>
        </section>
    )
}