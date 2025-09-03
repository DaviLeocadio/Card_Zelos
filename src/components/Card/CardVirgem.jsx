"use client";
import "./CardVirgem.css";
import React, { useEffect, useState } from "react";
import Chat from "../Chat/Chat";

export default function Carrosel({ chamados = [] }) {
  const [funcao, setFuncao] = useState("");
  const [chamadosArray, setChamadosArray] = useState([]);
  const [page, setPage] = useState(1);

  function page1() {
    setPage(1);
  }
  function page2() {
    setPage(2);
  }

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

      <div className={`card mt-2 row card-virgem borderColorPrioridade-1-virgem`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
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


      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header gap-4">
              {page === 1 ? (
                <>
                  <button onClick={page1} className="btn-ficha-virgem-ativado">
                    <h1 className="modal-title fs-5" >
                      Ficha Técnica
                    </h1>
                  </button>

                  <button onClick={page2}>
                    <h1 className="modal-title fs-5">Chat</h1>
                  </button>
                </>
              ) : (
                <>
                  <button onClick={page1}>
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Ficha Técnica
                    </h1>
                  </button>

                  <button onClick={page2} className="btn-chat-virgem-ativado">
                    <h1 className="modal-title fs-5">Chat</h1>
                  </button>
                </>
              )}
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            {/* Fim Modal Header */}

            {page === 1 ? (
              <div className="modal-body">
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
                <p><b>Título: </b> oiii asdgas shadgahjs shdgkAJ</p>
              </div>
            ) : (
              <div className="modal-body">
                <Chat possuiTecnico={false} />
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
