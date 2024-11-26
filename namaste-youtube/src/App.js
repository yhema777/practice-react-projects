import "./App.css";
import Body from "./components/Body";
import SidePanel from "./components/SidePanel";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
