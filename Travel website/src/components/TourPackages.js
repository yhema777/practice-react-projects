import '../css/TourPackages.css'


export default function TourPackages({ packages }) {
   
    return (
        <div>
            <p className='basic-text'>Available Packages</p>
            <div className="cards">

                {packages.map((tourPackage) => (
                    <div key={tourPackage.id} className='card'>
                        <img src={tourPackage.image} className='pics'></img>
                        <div>
                            <p className='image-text'>{tourPackage.title}: {tourPackage.duration}</p>
                            <div>
                                <p className='cost'>{tourPackage.cost}</p>
                                <button>Book Now</button>
                            </div>

                        </div>
                    </div>
                ))}

          </div>

        </div>

    );
}


