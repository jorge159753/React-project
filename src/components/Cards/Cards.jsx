import foto01 from '../assets/D_NQ_851579-MLA98322257382_112025-OO.webp';
import foto02 from '../assets/D_NQ_963172-MLA97798572334_112025-OO.webp';
import foto03 from '../assets/D_NQ_798287-MLA97924049360_112025-OO.webp';


function CardsSlide() {
    return (
        <>  
            <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={foto01} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto02} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src={foto03} className="d-block w-100" alt="..." />
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExample"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

export default CardsSlide;
