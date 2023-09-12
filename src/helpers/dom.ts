export function onSelect({ query, context = document }): Node {
  if (!query) {
    throw new Error('Error en la busqueda, falta parametro del query.')
  }

  return context.querySelector(query) as HTMLUListElement | null
}

export function onSelectAll({ query, context = document }) {
  if (!query) {
    throw new Error('Error en la busqueda, falta parametro del query.')
  }

  return context.querySelectorAll(query) as NodeListOf<Node> | null
}