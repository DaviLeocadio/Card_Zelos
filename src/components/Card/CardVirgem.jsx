"use client";
import "./CardVirgem.css";
import React, { useEffect, useState } from "react";


export default function Carrosel({ chamados = [] }) {
  const [funcao, setFuncao] = useState("");
  const [chamadosArray, setChamadosArray] = useState([]);




  async function atribuirTecnico(idChamado) {
    const cookieJWT = getCookie("token");
    try {
      const response = await fetch(
        `http://localhost:8080/chamado/${idChamado}`,
        {
          method: "PUT",
          headers: {
            Authorization: "Bearer " + cookieJWT,
          },
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Chamado atribuído com sucesso");
      } else {
        alert("Erro ao atribuir chamado");
      }
    } catch {
      alert("Erro ao enviar dados");
    }
  }


  const nomePerfil = "Davi Leocadio";
  const partes = nomePerfil.trim().split(" ");
  const iniciais =
    partes[0].charAt(0).toUpperCase() +
    partes[partes.length - 1].charAt(0).toUpperCase();
  const nomeExibido = `${partes[0]} ${partes[partes.length - 1]}`;

  const prioridades = {
    '1': "Intervenção Preventiva",
    '2': "Intervenção Sem Urgência",
    '3': "Intervenção Prioritária",
    '4': "Intervenção Imediata",
  };

  return (
    <>
      <div className={`card mt-2 row card-virgem borderColorPrioridade-1-virgem`}>
        <div className="col-md-2 ms-2 align-items-center d-flex justify-content-start">
          <img src="/doom.jpg" className="img-fluid imgPerfil-virgem" />
        </div>

        <div className="col-md-3 align-items-center justify-content-start d-grid">
          <div className="titulo-virgem justify-content-start align-items-center d-grid">
            <h2>oiii asdgas shadgahjs shdgkAJ</h2>
            <p className="m-0">Iniciado no dia 29/10/2025</p>
            {/* <p className="m-0">Iniciado no dia {new Date(chamado.criado_em).toLocaleDateString("pt-BR")}</p> */}
          </div>
        </div>

        <div className="col-md-3 align-items-center justify-content-center d-flex">
          <div className={`prioridade-virgem-1 align-items-center justify-content-center d-flex`}>
            <p className={`m-0 prioridadeP-1`}>Em Andamento</p>
          </div>
        </div>

        <div className="user-virgem col-md-2 align-items-center justify-content-start d-grid">
          <div className="align-items-center justify-content-center d-grid">
            <h6 className="m-0 text-center">Usuário</h6>
            <p className="m-0">Davi Leocadio</p>
          </div>

        </div>

        <div className="col-md-1 more-virgem align-items-center justify-content-center d-flex">
          <i className="bi bi-plus fs-1"></i>
        </div>

      </div>

    </>
  );
}
