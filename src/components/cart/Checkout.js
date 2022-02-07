import { useNavigate } from 'react-router-dom';
import poster_default from '../../assets/poster_default_1_4.jpg';

function Checkout() {
  let navigate = useNavigate();

  return (
    <main>
      <h2>Pagamento</h2>
      <div className="payment-wrapper">
        <div>
          <button className="btn btn-full btn-primary mb-2">PIX</button>
          <button className="btn btn-full btn-link mb-2">
            BOLETO BANCÁRIO
          </button>
          <button className="btn btn-full btn-link mb-2">
            CARTÃO DE CRÉDITO
          </button>
        </div>
        {/*  */}
        <div>
          <h4>PIX</h4>
          <p>
            Pix é o meio de pagamento eletrônico instantâneo, gratuito e com
            segurança, do Brasil. A iniciação de um Pix para uma pessoa física é
            gratuita. Foi lançado oficialmente no dia 5 de outubro de 2020 com
            início de funcionamento integral em 16 de novembro de 2020.[2][3] O
            Pix funciona 24 horas, sete dias por semana, entre instituições
            financeiras, fintechs e instituições de pagamento.
          </p>
          <p>
            Suas chaves de transação (conhecidas como chaves Pix) podem ser
            cadastradas utilizando os números do telefone celular, CPF ou CNPJ,
            endereço de e-mail do usuário, também é possível gerar uma chave
            aleatória (sequência alfanumérica gerada aleatoriamente) para
            aqueles usuários que não desejam vincular seus dados pessoais à
            chaves Pix. A chave Pix permite que o sistema (SPI) identifique os
            dados da conta transacional (que é uma conta de depósito à vista,
            conta de poupança ou conta de pagamento pré-paga) que o usuário
            mantém na instituição de sua escolha e que foram associados à chave
            Pix e realize a transação imediatamente.
          </p>
          <div className="payment-resume">
            <div>
              <h4>Total da sua compra:</h4>
              <h2>R$0.00</h2>
            </div>
            <div>
              <h4>Pagamento via pix: R$0.00</h4>
              <p>
                <small>(Economize: R$292.94)</small>
              </p>
            </div>
          </div>
          <div className="payment-next">
            <button className="btn btn-link" onClick={() => navigate(`/cart`)}>
              Voltar
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate(`/finish`)}
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Checkout;
