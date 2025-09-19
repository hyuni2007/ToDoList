import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Todolist from '../../myapp/src/component/todolist';
import Header from '../../myapp/src/component/header';
import Login from '../../myapp/src/component/login';
import Signup from './component/signUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={ <Todolist /> }/>
          <Route path='/sign' element={ <Signup /> }/>
          <Route path='/login' element={ <Login /> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;