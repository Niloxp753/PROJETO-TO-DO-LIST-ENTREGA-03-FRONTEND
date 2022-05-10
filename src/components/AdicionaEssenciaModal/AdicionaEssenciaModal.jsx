import { useState } from 'react';
import Modal from "components/Modal/Modal";

import "./AdicionarEssenciaModal.css";

function AdicionaEssenciaModal({closeModal}){
    const form = {
        preco: "",
        sabor: "",
        aroma: "",
        descricao: "",
        foto: "",
        front: ""
    }

    const [state, setState] = useState(form);

    const handleChange = (e, name) => {
        setState({...state, [name]: e.target.value})
    }
    return(
        <Modal closeModal={closeModal}>
            <div className="AdicionaEssenciaModal">
                <form autocomplete="false">
                    <h2>Adicionar ao Cardápio</h2>
                    <div>
                        <label className="AdicionaEssenciaModal__text" htmlFor="preco">Preço: </label>
                        <input 
                            id="preco" 
                            type="text" 
                            placeholder="R$ 10,00" 
                            value={state.preco}
                            onChange={(e) => handleChange(e, "preco")}/>
                    </div>
                    <div>
                    <label className="AdicionaEssenciaModal__text" htmlFor="sabor">Sabor: </label>
                        <input 
                            id="sabor" 
                            type="text" 
                            placeholder="Cereja" 
                            value={state.sabor}
                            onChange={(e) => handleChange(e, "sabor")}/>
                    </div>
                    <div>
                    <label className="AdicionaEssenciaModal__text" htmlFor="aroma">Aroma: </label>
                        <input 
                            id="aroma" 
                            type="text" 
                            placeholder="Doce" 
                            value={state.aroma}
                            onChange={(e) => handleChange(e, "aroma")}/>
                    </div>
                    <div>
                    <label className="AdicionaEssenciaModal__text" htmlFor="descricao">Descrição: </label>
                        <input 
                            id="descricao" 
                            type="text" 
                            placeholder="Detalhe o produto" 
                            value={state.descricao}
                            onChange={(e) => handleChange(e, "descricao")}/>
                    </div>
                    <div>
                    <label className="AdicionaEssenciaModal__text AdicionaEssenciaModal__foto-label" htmlFor="foto">
                        {!state.foto.length ? "Selecionar Imagem" : state.foto}
                    </label>
                        <input
                            className="AdicionaEssenciaModal__foto" 
                            id="foto" 
                            type="file"
                            accept="image/png, image/gif, image/jpeg, image/_png" 
                            value={state.foto}
                            onChange={(e) => handleChange(e, "foto")}/>
                    </div>
                    <div>
                    <label className="AdicionaEssenciaModal__text" htmlFor="front">
                        {!state.front.length ? "Selecionar Imagem" : state.front}
                    </label>
                        <input 
                            id="front" 
                            type="file" 
                            value={state.front}
                            onChange={(e) => handleChange(e, "front")}/>
                    </div>
                    <input
                        className='AdcionaEssenciaModal__enviar' 
                        type="submit" 
                        value="Enviar" />
                </form>
            </div>
        </Modal>
    );
}

export default AdicionaEssenciaModal;