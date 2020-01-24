//CreateStore Cria estado global da aplicação

const INITIAL_STATE = {
  value: 0
}

//Função que retorar o estado inicial
//Reducer recebe 2 parametros. Para quando action for disparado.
//Primeiro estado (Estado antes da action ser disparada)
//Segunda estado (Action )
export default function count(state = INITIAL_STATE, action) {
  if (action.type === 'INCREMENT_STATE') {
    {console.log("incrementend", action.countIncremented)}
    return { ...state, value: action.countIncremented }
  }
  return state
}