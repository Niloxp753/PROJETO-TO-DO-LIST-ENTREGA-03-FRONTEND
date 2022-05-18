import './EssenciaDetalhesModal.css'
import Modal from 'components/Modal/Modal'

function EssenciaDetalhesModal({essencia, closeModal}) {
    return(
        <Modal closeModal = {closeModal}>
            <div className="EssenciaDetalhesModal">
                <div>
                    <div className='EssenciaDetalhesModal__titulo'>{essencia.titulo}</div>
                    <div className='EssenciaDetalhesModal__preco'>R${Number(essencia.preco).toFixed(2)}</div>
                    <div className='EssenciaDetalhesModal__descricao'><b>Sabor: </b>{essencia.sabor}</div>
                    {essencia.aroma &&  <div className='EssenciaDetalhesModal__descricao'><b>Aroma:</b>{essencia.aroma}</div>}
                    <div className='EssenciaDetalhesModal__descricao'><b>Descrição: </b>{essencia.descricao}</div>
                </div>
                <img src={essencia.foto} alt={`Essência de ${essencia.sabor}`} className="EssenciaDetalhesModal__foto" />
            </div>
        </Modal>
    );
}


export default EssenciaDetalhesModal;