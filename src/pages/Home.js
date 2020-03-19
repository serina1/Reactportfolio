import React from 'react'

function Home() {
    return (
      <div className="contentBody">
        <h2 className="content-header">About Me</h2>
        <img
          className="img-float"
          src="assets\Images\profile.jpg"
          alt="Placeholder"
        />
        <article>
          <p className="paragraph">
            Training to become a full stack developer, by building and
            developing dynamics applications using various programmes such as
            HTML, CSS, Javascript, Handlesbars, node express,mysql, mongo,
            mongoose, express, axios and many more npm packages. Creating my own
            full stack application using the above, calling data from a database
            and retrieve into front-end html files.
          </p>
        </article>
      </div>
    );
  }
  export default Home;