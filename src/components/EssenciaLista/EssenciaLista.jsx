import React, { useState, useEffect } from "react";
import EssenciaListaItem from "components/EssenciaListaItem/EssenciaListaItem";
import { EssenciaService } from "services/EssenciaService";
import EssenciaDetalhesModal from "components/EssenciaDetalhesModal/EssenciaDetalhesModal";
import "./EssenciaLista.css";

function EssenciaLista({essenciaCriada}) {
  const [essencias, setEssencias] = useState([]);

  const [essenciaSelecionada, setEssenciaSelecionada] = useState({});

  const [essenciaModal, setEssenciaModal] = useState(false);

  const adicionarItem = (essenciaIndex) => {
    const essencia = {
      [essenciaIndex]: Number(essenciaSelecionada[essenciaIndex] || 0) + 1,
    };
    setEssenciaSelecionada({ ...essenciaSelecionada, ...essencia });
  };

  const removerItem = (essenciaIndex) => {
    const essencia = {
      [essenciaIndex]: Number(essenciaSelecionada[essenciaIndex] || 0) - 1,
    };
    setEssenciaSelecionada({ ...essenciaSelecionada, ...essencia });
  };

  const getLista = async () => {
    const response = await EssenciaService.getLista();
    setEssencias(response);
  };

  const getEssenciaById = async (essenciaId) => {
    const response = await EssenciaService.getById(essenciaId);
    setEssenciaModal(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  const adicionaEssenciaNaLista = (essencia) => {
    const lista = [...essencias, essencia];
    setEssencias(lista);
  };

  useEffect(() => {
    if (essenciaCriada) adicionaEssenciaNaLista(essenciaCriada)
  }, [essenciaCriada]);

  return (
    <div className="EssenciaLista">
      {essencias.map((essencia, index) => (
        <EssenciaListaItem
          key={`EssenciaListaItem-${index}`}
          essencia={essencia}
          quantidadeSelecionada={essenciaSelecionada[index]}
          index={index}
          onRemove={(index) => removerItem(index)}
          onAdd={(index) => adicionarItem(index)}
          clickItem={(essenciaId) => getEssenciaById(essenciaId)}
        />
      ))}
      {essenciaModal && (
        <EssenciaDetalhesModal
          essencia={essenciaModal}
          closeModal={() => setEssenciaModal(false)}
        />
      )}
    </div>
  );
}

export default EssenciaLista;
