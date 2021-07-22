import { Provider } from 'react-redux';
import store from '../configs/redux/store';
import Routes from '../configs/router';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
