import React from 'react'
import './carasoul.scss'

function Carasoul() {
    return (
        <section className='carasoul text-center'>
            <div>
                <h2 className='carasoul-title'>Driving Digital Revenue <br />For Our 100+ Satisfied Clients</h2>
            </div>
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <img src="/images/Logo-BannerV2.webp" className="d-block w-100 carasoul-img" alt="logo-1" />
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <img src="/images/Logo-BannerV2.webp" className="d-block w-100 carasoul-img" alt="logo-2" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Carasoul
