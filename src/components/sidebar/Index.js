import React from 'react';

// conncet do redux compartilha estado, ações via componentes
import { connect } from 'react-redux'

function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',  //Ação que esta sendo realizado(Tem que ser única)
    module,
    lesson
  }
}

function incrementState(value){
  let x = value +1
  return{
    type: 'INCREMENT_STATE',
    countIncremented: x
  }
}

//modules é o objeto criado no connet com a resposta do estado
//Dispatch serva para disparar actions para o redux
const Sidebar = ({ modules, value, dispatch }) =>
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id}>
              {lesson.title}
              <button onClick={() => dispatch(toggleLesson(module, lesson),
                dispatch(incrementState(value))
                )}>
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>;

//Connect recebe uma função que recebe um estado e retorna um obj
// com quais informações eu quero do estado
export default connect(state => ({ 
  modules: state.course.modules,
  value: state.count.value
}))(Sidebar);
