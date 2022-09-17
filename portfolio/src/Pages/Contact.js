import React from 'react'
 const informations = {
    email: 'rahmaa.hamza.2001@gmail.com',
    phone: '+216 21 274 227',
    address : {
        country:'tunisie',
        city : 'Sfax' ,
        street : 'hay-habib',
        postalCode : 3025,
    }
 }
function Contact() {
  return (
    <div>
        <div className='contact-item'> 
        <i className="fa-regular fa-envelope custom-icon"></i>
        <p className='contact-text' >
                {informations.email}
            </p>
        </div>
        <div className='contact-item'> 
        <i className="fa-sharp fa-solid fa-phone custom-icon"></i>
        <p className='contact-text' >
                {informations.phone}
            </p>
        </div>
        <div>
        <div className='contact-item'> 
        <i className="fa-solid fa-location-dot custom-icon"></i>
            <p  className='contact-text' >{informations.address.street} {informations.address.country} {informations.address.city} {informations.address.postalCode}</p>
       </div>
        </div>
        </div>
  )
}

export default Contact