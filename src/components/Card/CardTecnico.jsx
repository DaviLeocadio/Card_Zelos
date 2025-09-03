"use client";
import "./CardTecnico.css";
import React, { useEffect, useState } from "react";
import Chat from "../Chat/Chat";
import BtnPegarChamado from "../BtnPegarChamado/BtnPegarChamado";

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
      <div className="card mt-2 row card-tecnico borderColorPrioridade-1-tecnico"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal1">

        <div className="col-12 col-sm-2 col-md-2 ms-md-2 align-items-center d-flex justify-content-center justify-content-sm-start">
          <img src="/doom.jpg" className="img-fluid imgPerfil-tecnico" />
        </div>

        <div className="col-12 col-sm-3 col-md-3 align-items-center justify-content-center justify-content-sm-start d-grid mt-2 mt-sm-0">
          <div className="titulo-tecnico justify-content-start align-items-center d-grid text-center text-sm-start">
            <h2>oiii asdgas shadgahjs shdgkAJ</h2>
            <p className="m-0">Iniciado no dia 29/10/2025</p>
          </div>
        </div>

        <div className="col-12 col-sm-3 col-md-3 align-items-center justify-content-center d-flex mt-2 mt-sm-0">
          <div className="prioridade-tecnico-1 align-items-center justify-content-center d-flex">
            <p className="m-0 prioridadeP-1">Em Andamento</p>
          </div>
        </div>

        <div className="tecnico-tecnico col-12 col-sm-2 col-md-2 align-items-center justify-content-center justify-content-sm-start d-grid mt-2 mt-sm-0">
          <div className="align-items-center justify-content-center d-grid">
            <h6 className="m-0 text-center text-sm-start">Usuário</h6>
            <p className="m-0">Davi Leocadio</p>
          </div>
        </div>

        <div className="col-12 col-sm-1 col-md-1 more-tecnico align-items-center justify-content-center d-flex mt-2 mt-sm-0">
          <i className="bi bi-plus fs-1"></i>
        </div>
      </div>


      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header gap-4">
              {page === 1 ? (
                <>
                  <button onClick={page1} className="btn-ficha-tecnico-ativado">
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
                    <h1 className="modal-title fs-5" id="exampleModalLabel1">
                      Ficha Técnica
                    </h1>
                  </button>

                  <button onClick={page2} className="btn-chat-tecnico-ativado">
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
              <div className="modal-body gap-5 p-4">
                <div className="d-grid infos-ficha-tecnico gap-3">
                  <p><b>Título: </b> oiii asdgas shadgahjs shdgkaaaaaaa AJ</p>


                  <div className="d-md-flex d-grid info-ficha-tecnico gap-4">
                    <p><b>Criação: </b> 20/12/2025</p>
                    <p><b>Prioridade: </b> Intervenção Imediata </p>
                  </div>
                  <div className="d-md-flex d-grid info-ficha-tecnico gap-4">
                    <p><b>Status: </b> Em Andamento</p>
                    <p><b>Tipo: </b> Software</p>

                  </div>
                  <div className="d-md-flex d-grid info-ficha-tecnico gap-4">

                    <p><b>Técnico: </b> Sem Técnico</p>
                    <p><b>Patrimônio: </b> 1213221</p>
                  </div>


                  <p><b>Descrição: </b> oiii asdgas shadgahjs sashdgashd shAGDHASJGD ashdgashdghdgkAJ aaaa</p>
                </div>
             
              </div>
            ) : (
              <div className="modal-body">
                <div className="d-flex aling-items-center gap-3">
                  <i className="bi bi-person-circle text-center fs-5"></i>
                  <h4>Fábio Henrique</h4>
                </div>

                <Chat possuiTecnico={true} />
              </div>
            )}
          </div>
        </div>
      </div>

    </>
  );
}
