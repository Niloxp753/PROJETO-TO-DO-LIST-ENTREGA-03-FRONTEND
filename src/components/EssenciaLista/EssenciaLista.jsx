import React, { useState, useEffect } from "react";
import EssenciaListaItem from "components/EssenciaListaItem/EssenciaListaItem";
import { EssenciaService } from "services/EssenciaService";
import EssenciaDetalhesModal from "components/EssenciaDetalhesModal/EssenciaDetalhesModal";
import "./EssenciaLista.css";

function EssenciaLista() {
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

  useEffect(() => {
    getLista();
  }, []);

  const getEssenciaById = async (essenciaId) => {
    const response = await EssenciaService.getById(essenciaId);
    setEssenciaModal(response);
  }

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
