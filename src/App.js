import {Provider} from "react-redux";
import store from './store';
import {CharacterList, CharacterDetail} from "./pages";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<CharacterList/>}/>
          <Route path="/:id" element={<CharacterDetail/>}/>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
