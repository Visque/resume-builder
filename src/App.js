import logo from './logo.svg';
import './App.css';

import LeftWin from './pages/leftWin'
import RightWin from "./pages/rightWin";

function App() {
  return (
    <>
      <div className="body flex">
        <LeftWin />
        <RightWin />
      </div>
    </>
  );
}

export default App;
