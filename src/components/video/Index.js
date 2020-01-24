import React from 'react';

import { connect } from 'react-redux'

// import { Container } from './styles';

const Video = ({ activeLesson, activeModule, value }) =>
  <div>
    <hr />
    <p>Solicitações realizadas: {value}</p>
    <strong>Módulo: </strong> {activeModule.title}
    <strong>Aula: </strong>{ activeLesson.title}
    <hr />
  </div>

export default connect(state => ({
  activeLesson: state.course.activeLesson,
  activeModule: state.course.activeModule,
  value: state.count.value
}))(Video)
