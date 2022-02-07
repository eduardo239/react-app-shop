import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';

function PreCart() {
  let navigate = useNavigate();

  return (
    <main>
      <h2>Serviços</h2>
      <div className="cart-wrapper">
        <div>
          <img className="cart-img" src={poster_default} alt="XXX" />
        </div>
        <div>
          <h4>Title</h4>
          <p>Description</p>
        </div>
        <div>
          <h4>Price</h4>
          <p>$0.00</p>
        </div>

        <div className="primary">
          <h4>Preço à vista no PIX</h4>
          <p>$0.00</p>
        </div>
      </div>
      <hr />
      <div>
        <h3>Garantia estendida</h3>
        <div className="cart-services-wrapper">
          <div>
            <p>
              Aproveite nossos planos de <b>garantia estendida</b> e mantenha o
              seu produto protegido por mais tempo
            </p>
            <div>
              <img className="cart-img" src={poster_default} alt="XXX" />
              <img className="cart-img" src={poster_default} alt="XXX" />
            </div>
            <div>
              <p>O que você perde sem a garantia estendida</p>
              <ul>
                <li>Conserto utilizando peças originais</li>
                <li>Mais tempo de garantia além do ofertado pelo fabricante</li>
                <li>
                  Cobertura técnica disponível em todo o <b>Brasil</b>
                </li>
                <li>O produto novo ou reparado, é entregue em casa</li>
              </ul>
            </div>
          </div>
          {/* repeat */}
          <div>
            <h4>Serviços</h4>
            <div>
              <p>
                <span>Garantia estendida: </span> <b>R$0.00</b>
              </p>
              <p>
                <span>Roubo e furto: </span> <b>R$0.00</b>
              </p>
            </div>
            <div>
              <p>
                <small>Valor total</small>
              </p>
              <h3>R$0.00</h3>
            </div>
            <div>
              <button
                className="btn btn-full btn-primary mb-3"
                onClick={() => navigate(`/cart`)}
              >
                ir para o carrinho
              </button>
              <button
                className="btn btn-full btn-link"
                onClick={() => navigate(`/`)}
              >
                continuar comprando
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PreCart;
