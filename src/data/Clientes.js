const API = import.meta.env.VITE_API_URL

export async function obtenerClientes() {
  const respuesta = await fetch(API)
  return await respuesta.json()
}

export async function obtenerCliente(id) {
  try {
    const respuesta = await fetch(`${API}/${id}`)
    return await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function actualizarCliente(id, datos) {
  try {
    const respuesta = await fetch(`${API}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(datos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}

export async function eliminarCliente(id) {
  try {
    const respuesta = await fetch(`${API}/${id}`, {
      method: 'DELETE'
    })
    return await respuesta.json()
  } catch (error) {
    console.log(error)
  }
}
