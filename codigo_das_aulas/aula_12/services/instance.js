import axios from "axios";

/**
 * Instância do Axios pré-configurada com a baseURL para a API JSONPlaceholder.
 * 
 * @constant
 * @type {import('axios').AxiosInstance}
 * @see {@link https://axios-http.com/ptbr/docs/instance}
 */
export const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
})
