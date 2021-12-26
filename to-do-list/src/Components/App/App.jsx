import Header from "../Header/Header.jsx";
import Main from "../Main/Main.jsx";

export default function App({ store }) {
  return (
    <div className="App">
      <Header />
      <Main store={store} />
    </div>
  );
}
