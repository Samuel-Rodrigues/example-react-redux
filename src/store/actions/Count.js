export function incrementState(value){
  let x = value +1
  return{
    type: 'INCREMENT_STATE',
    countIncremented: x
  }
}