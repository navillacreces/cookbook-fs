import React from 'react';
import {Link} from 'react-router-dom';



export default function Landing (){



    return (
        <section>
            <form>
              <input type="text" defaultValue="username"></input>
              <br />
              <input type="text" defaultValue="password"></input>
              <br />
              <button type="submit">Sign In</button><br />
              <br />
              <div className="createNew">
                <Link to='/createNew' className="create-new-link">Create New Account</Link>
              </div>
            </form>
        </section>

    )
}