import { instance as api } from "../instance"

/**
 * Atualiza parcialmente um recurso existente enviando dados em formato JSON via requisição PATCH.
 *
 * @async
 * @function patch
 * @param {number} id - O identificador do recurso a ser atualizado.
 * @param {Object} json - Os dados a serem enviados para atualização do recurso.
 * @returns {Promise<void>} Retorna uma Promise que resolve quando a requisição for concluída.
 * @throws {Error} Lança um erro caso a requisição falhe.
 */
export const patch = async (id, json) => {
  try {
    // Envia os dados atualizados como JSON na requisição PATCH
    const response = await api.patch(`posts/${id}`, JSON.stringify(json))
    console.log("PATCH response:", response.data)
  } catch (err) {
    // Exibe erro caso a requisição falhe
    console.error("PATCH error:", err)
  }
}

/**
 * Cria um novo recurso enviando dados em formato JSON via requisição POST.
 *
 * @async
 * @function post
 * @param {Object} json - Objeto contendo os dados a serem enviados no corpo da requisição.
 * @returns {Promise<void>} Retorna uma Promise que resolve quando a requisição for concluída.
 * @throws {Error} Lança um erro caso a requisição falhe.
 */
export const post = async (json) => {
  try {
    // Envia os dados do novo post como JSON
    const response = await api.post("posts", JSON.stringify(json))
    console.log("POST response:", response.data, response.status)
  } catch (err) {
    // Exibe erro caso a requisição falhe
    console.error("POST error:", err)
  }
}

/**
 * Atualiza completamente um recurso existente enviando dados em formato JSON via requisição PUT.
 *
 * @async
 * @function put
 * @param {number} id - O identificador do recurso a ser atualizado.
 * @param {Object} json - Os dados atualizados a serem enviados no corpo da requisição.
 * @returns {Promise<void>} Retorna uma Promise que resolve quando a requisição for concluída.
 * @throws {Error} Lança um erro caso a requisição falhe.
 */
export const put = async (id, json) => {
  try {
    // Envia os dados atualizados como JSON na requisição PUT
    const response = await api.put(`posts/${id}`, JSON.stringify(json))
    console.log("PUT response:", response.data)
  } catch (err) {
    // Exibe erro caso a requisição falhe
    console.error("PUT error:", err)
  }
}

/**
 * Remove um recurso existente enviando uma requisição HTTP DELETE.
 *
 * @async
 * @function del
 * @param {number} id - O identificador do recurso a ser removido.
 * @returns {Promise<void>} Retorna uma Promise que resolve quando a requisição for concluída.
 * @throws {Error} Lança um erro caso a requisição falhe.
 */
export const del = async (id) => {
  try {
    // Realiza a exclusão do post
    const response = await api.delete(`posts/${id}`)
    console.log("DELETE response:", response.data)
  } catch (err) {
    // Exibe erro caso a requisição falhe
    console.error("DELETE error:", err)
  }
}
