import React from 'react';


export default function CreateNew(){

    return(
        <section>
            <form>
             <input type="text" defaultValue="username"></input>
              <br />
              <input type="text" defaultValue="password"></input>
              <br />
              <input type="text" defaultValue="confirm password"></input>
              <br />
              <button type="submit" className="bttn-new">Make account</button>
              <br />
            </form>
        </section>
    )
}