export function toggleLesson(module, lesson) {
  return {
    type: 'TOGGLE_LESSON',  //Ação que esta sendo realizado(Tem que ser única)
    module,
    lesson
  }
}