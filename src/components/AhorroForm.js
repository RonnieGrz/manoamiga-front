import { Field, Form, Formik } from "formik";
import React, { useEffect, useContext } from "react";
import UserContext from "../context/User/UserContext";
import { createSavingRequest } from "../api/createSavingRequest.js";
import styled from "styled-components";
import { Modal } from '@mui/material';

const AhorroForm = ({ estado, cambiarEstado }) => {
  const { selectedUser } = useContext(UserContext);

  const fechaActual = new Date();
  const fechaParsed = fechaActual.toLocaleDateString();

  return (
    <>
        <Overlay>
          <ContenedorModal>
            <EncabezadoModal>
              <h3>Registro ahorro</h3>
            </EncabezadoModal>
            <BotonCerrar onClick={() => cambiarEstado(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </BotonCerrar>
            <Formik
              initialValues={{
                valor_pago: 0,
                mes_abonado: "",
                fecha_pago: fechaParsed,
              }}
              onSubmit={async (values, actions) => {
                console.log(values);
                try {
                  values.documento_asociado = selectedUser.documento;
                  const reponse = await createSavingRequest(
                    values,
                    selectedUser.id
                  );
                  console.log(reponse);
                  actions.resetForm();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form className="container" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">Valor a ingresar</label>
                    <input
                      type="number"
                      className="form-control"
                      name="valor_pago"
                      placeholder=""
                      onChange={handleChange}
                      value={values.valor_pago}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Mes Abonado</label>
                    <Field
                      as="select"
                      name="mes_abonado"
                      className="form-control"
                      onChange={handleChange}
                      value={values.mes_abonado}
                    >
                      <option value="Enero">Enero</option>
                      <option value="Febrero">Febrero</option>
                      <option value="Marzo">Marzo</option>
                      <option value="Abril">Abril</option>
                      <option value="Mayo">Mayo</option>
                      <option value="Junio">Junio</option>
                      <option value="Julio">Julio</option>
                      <option value="Agosto">Agosto</option>
                      <option value="Septiembre">Septiembre</option>
                      <option value="Octubre">Octubre</option>
                      <option value="Noviembre">Noviembre</option>
                      <option value="Diciembre">Diciembre</option>
                    </Field>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    {isSubmitting
                      ? "Guardando nuevo asociado"
                      : "Registrar ahorro"}
                  </button>
                </Form>
              )}
            </Formik>
          </ContenedorModal>
        </Overlay>
    </>
  );
};

export default AhorroForm;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
`;

const ContenedorModal = styled.div`
  width: 500px;
  min-height: 100px;
  position: relative;
  background: #fff;
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0, 2) 0px 7px 29px 0px;
  padding: 20px;
`;

const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e8e8e8;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: #1766dc;
  }
`;

const BotonCerrar = styled.button`
  position: absolute;
  background: none;
  top: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  color: #1766dc;

  &:hover {
    background: #f2f2f2;
  }
`;
