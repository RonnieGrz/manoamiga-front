import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/User/UserContext";
import AhorroForm from "../components/AhorroForm";
import { Modal, Box, Typography } from "@mui/material";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserSavings = (props, { estado, cambiarEstado }) => {
  const { userSavings, selectedUser, getSelectedUsers } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [estadoModal, cambiarEstadoModal] = useState(false);


  useEffect(() => {
    getSelectedUsers(selectedUser)
    console.log("UserSavings", userSavings);
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">Ahorro Mensual</h1>
      <hr size="2px" />
      <div className="row justify-content-between">
        <div className="col-auto mr-auto">
          <h3 className="text-center">
            {" "}
            {selectedUser.nombres} {selectedUser.apellidos}{" "}
          </h3>
        </div>
        <div className="col-auto">
          <button class="btn btn-primary" onClick={handleOpen}>
            Añadir ahorro
          </button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box>
          <AhorroForm>

          </AhorroForm>
          </Box>
        </Modal>
      </div>
      <hr size="2px" />
      <table className="table table-hover ">
        <thead>
          <tr>
            <th scope="col">Valor pago </th>
            <th scope="col">Mes abonado </th>
            <th scope="col">Fecha pago </th>
          </tr>
        </thead>
        <tbody>
          {userSavings.map((usuario) => {
            return (
              <tr key={usuario.id}>
                <th scope="row">{usuario.valor_pago} </th>
                <td>{usuario.mes_abonado} </td>
                <td>{usuario.fecha_pago} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UserSavings;
