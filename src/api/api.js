import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000"
})

//Se conecta a baseUrl, cuando tiene respuesta espera y lo guarda en respuesta
export const buscar = async (url,setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}