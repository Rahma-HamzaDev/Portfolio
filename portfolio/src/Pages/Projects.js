import React from 'react'
const myProjects = [{
  title: 'business Land',
  description: 'A simple landing page developed with html and CSS',
  URL: 'https://rahma-hamzadev.github.io/busniess-land/'
},
{
  title: 'TODOM',
  description: 'A simple to do list developed with html , CSS and javascript',
  URL: 'https://todom-devmastery.vercel.app/'
}
]
function Projects() {
  return (
    <div>
      {myProjects.map((item, index) =>
        <div style={{ padding: 20 }}>
          <div className="card" >
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted"> {item.description}</h6>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href={item.URL} target='-blank' className="card-link">Preview</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Projects