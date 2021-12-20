import "./app.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";

export default function App({ store }) {
  return (
    <div className="App">
      <Header />
      <Main store={store} />
    </div>
  );
}
