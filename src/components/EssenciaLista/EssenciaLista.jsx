
import React, { useState, useEffect, useCallback } from "react";
import EssenciaListaItem from "components/EssenciaListaItem/EssenciaListaItem";
import { EssenciaService } from "services/EssenciaService";
import EssenciaDetalhesModal from "components/EssenciaDetalhesModal/EssenciaDetalhesModal";

import "./EssenciaLista.css";

import { ActionMode } from "constants/index";

function EssenciaLista({
  essenciaCriada,
  mode,
  updateEssencia,
  deleteEssencia,
  essenciaEditada,
  essenciaRemovida,
}) {
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
    const mapper = {
      [ActionMode.NORMAL]: () => setEssenciaModal(response),
      [ActionMode.ATUALIZAR]: () => updateEssencia(response),
      [ActionMode.DELETAR]: () => deleteEssencia(response),
    };

    mapper[mode]();
  };

  useEffect(() => {
    getLista();
  }, [essenciaEditada, essenciaRemovida]);

  const adicionaEssenciaNaLista = useCallback(
    (essencia) => {
      const lista = [...essencias, essencia];
      setEssencias(lista);
    },
    [essencias]
  );

  useEffect(() => {
    if (
      essenciaCriada &&
      !essencias.map(({ id }) => id).includes(essenciaCriada.id)
    ) {
      adicionaEssenciaNaLista(essenciaCriada);
    }
  }, [adicionaEssenciaNaLista, essenciaCriada, essencias]);

  return (
    <div className="EssenciaLista">
      {essencias.map((essencia, index) => (
        <EssenciaListaItem
          mode={mode}
          key={`EssenciaListaItem-${index}`}
          essencia={essencia}
          quantidadeSelecionada={essenciaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
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
