//CreateStore Cria estado global da aplicação

const INITIAL_STATE = {
  activeLesson: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "01",
      lessons: [
        { id: 1, active: false, title: "Primeira aula" },
        { id: 2, active: false, title: "Segunda aula" }
      ]
    },
    {
      id: 2,
      title: " 02",
      lessons: [
        { id: 3, active: false, title: "Primeira aula" },
        { id: 4, active: false, title: "Segunda aula" }
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

    state.modules.map(module => {
      module.lessons.map(lesson => {
        lesson.active = false
      })
    })

    state.modules.map(module => {
      if (module.id === action.module.id) {
        module.lessons.map(lesson => {
          if (lesson.id === action.lesson.id) {
            lesson.active = true
          }
        })
      }
    })

    return {
      ...state, activeLesson: action.lesson, activeModule: action.module
    }
  }
  return state
}