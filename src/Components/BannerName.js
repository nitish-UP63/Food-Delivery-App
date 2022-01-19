import React from 'react'

function BannerName({name,discount,link}) {
    return (
        <div className='bannerContent'>
        <h3>Hello {name}</h3>
        <p>
            Get Free Discount for every <span>Rs{discount}</span> purchase

        </p>
        
        <a href={link}>Learn More</a>       
        </div>
    )
}

export default BannerName
