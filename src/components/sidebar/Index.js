import React from 'react';

// conncet do redux compartilha estado, ações via componentes
import { connect } from 'react-redux'

import './Index.css'

import * as CourseActions from '../../store/actions/Course'
import * as CountActions from '../../store/actions/Count'



//modules é o objeto criado no connet com a resposta do estado
//Dispatch serva para disparar actions para o redux
const Sidebar = ({ modules, value, dispatch }) =>
  <aside>
    {modules.map(module => (
      <div key={module.id}>
        <strong>Módulo: {module.title}</strong>
        <ul>
          {module.lessons.map(lesson => (
            <li key={lesson.id} className={(lesson.active == true ? "ulActive" : '')}>
              {lesson.title}
              <button onClick={() =>
                dispatch(CourseActions.toggleLesson(module, lesson),
                  dispatch(CountActions.incrementState(value))
                )
              }>
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
