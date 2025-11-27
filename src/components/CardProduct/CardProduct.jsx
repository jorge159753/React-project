import Fone from '../assets/Produtos/D_NQ_NP_2X_780544-MLA96091120323_102025-F.webp';
import FoneBranco from '../assets/Produtos/Sem título.webp'
import FoneBlu from '../assets/Produtos/FoneBlu.webp'
import FoneAzul from '../assets/Produtos/FoneAzul.webp'
import './style.css'

function CardProduct({ prod, preco, desc }) {
    return (

        <div className='body'>

            <div className='container-full'>
                <h4 className='title'>Lista de Produtos</h4>
                <div className='container'>

                    <div className="card">
                        <img src={Fone} alt="produto" />
                        <p>{prod}</p>
                        <h2 className='btn-preco'>{preco}</h2>
                    </div>

                    <div className="card">
                        <img src={Fone} alt="produto" />
                        <p>{prod}</p>
                        <h2 className='btn-preco'>{preco}</h2>
                    </div>

                    <div className="card">
                        <img src={Fone} alt="produto" />
                        <p>{prod}</p>
                        <h2 className='btn-preco'>{preco}</h2>
                    </div>

                    <div className="card">
                        <img src={Fone} alt="produto" />
                        <p>{prod}</p>
                        <h2 className='btn-preco'>{preco}</h2>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default CardProduct;