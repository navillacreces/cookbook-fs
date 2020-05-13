import React from 'react';
import {Link} from 'react-router-dom';



export default function Landing (){



    return (
        <section className="landing-section">
            <form className="landing-menu">
              <input type="text" defaultValue="username"></input>
              <br />
              <input type="text" defaultValue="password"></input>
              <br />
              <button className="bttn-sign-in" type="submit">Sign In</button><br />
              <br />
              <div className="createNew">
                <Link to='/createNew' className="create-new-link">
                  <button type='button' className='bttn-new-account'>
                  Sign Up
                  </button>
                  </Link>
              </div>
            </form>
        </section>

    )
}