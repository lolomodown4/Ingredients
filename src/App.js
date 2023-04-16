import "./App.css";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Search from "./components/Search";
import MyModal from "./components/Modal";
import { useGlobalContext } from "./context";

function App() {
  const { showModal, showFavorites } = useGlobalContext();
  return (
    <div>
      <Search />
      {showFavorites.length > 0 && <Favorites />}
      <Meals />
      {showModal && <MyModal />}
    </div>
  );
}

export default App;
