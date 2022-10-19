//inicializa axios con cabeceras y URL base HTTP. – tiene métodos para enviar solicitudes HTTP a las Apis.

import axios from "axios";

export default axios.create({
  baseURL: "https://backpruebartk.herokuapp.com/api",
  headers: {
    "Content-type": "application/json",
  },
});
