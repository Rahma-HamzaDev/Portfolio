import React from 'react'
import axios from "axios";

function Skills() {
  const [technologie, settechnologie] = React.useState([])
  React.useEffect(() => {
    axios.get('https://devmastery-assets.vercel.app/technologies.json')
      .then((response) => { settechnologie(response.data) })
      .catch((error) => { console.log(error) })
  }, [])
  return (
    <div className='row'>
      {technologie.map((item) =>
      (
        <div key={item.id} className='col-12 col-sm-6 col-md-4 col-lg-3 p-3' >
          <div className="card" >
            <img src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <a href="#" className="btn btn-primary">learn about</a>
            </div>
          </div>
        </div>
      )
      )}
    </div>

  )
}

export default Skills