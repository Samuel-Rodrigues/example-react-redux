//CreateStore Cria estado global da aplicação

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Módulo 01",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" }
      ]
    },
    {
      id: 2,
      title: "Módulo 02",
      lessons: [
        { id: 3, title: "Primeira aula" },
        { id: 4, title: "Segunda aula" }
      ]
    }
  ]
}

//Função que retorar o estado inicial
//Reducer recebe 2 parametros. Para quando action for disparado.
//Primeiro estado (Estado antes da action ser disparada)
//Segunda estado (Action )
export default function course(state = INITIAL_STATE, action) {
  if (action.type === 'TOGGLE_LESSON') {
    return { ...state, activeLesson: action.lesson, activeModule: action.module }
  }
  return state
}