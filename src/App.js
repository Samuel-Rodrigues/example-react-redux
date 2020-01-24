import React, { Component } from 'react';
import { Provider } from 'react-redux'

import Sidebar from './components/sidebar/Index'
import Video from './components/video/Index'
import store from './store/Index'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Provider repassa todo o estado do reducer para os componentes filhos */}
        <Provider store={store}>
          <Video />
          <Sidebar />
        </Provider>
      </div>
    )
  }
}

export default App;
