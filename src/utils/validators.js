export function validateEmptyAndLength6 (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  if (value.length < 3) {
    return '*Este campo deve conter no mínimo 6 caracteres'
  }

  return true
}

export function validateEmptyAndEmail (value) {
  if (!value) {
    return '*Este campo é obrigatório'
  }

  const isValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value)

  if (!isValid) {
    return '*Email inválido'
  }

  return true
}
