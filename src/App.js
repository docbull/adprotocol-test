import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import Game1 from './page/posts/game/Game1';
import Game2 from './page/posts/game/Game2';
import Game3 from './page/posts/game/Game3';
import Food1 from './page/posts/food/Food1';
import Food2 from './page/posts/food/Food2';
import Food3 from './page/posts/food/Food3';
import Beauty1 from './page/posts/beauty/Beauty1';
import Beauty2 from './page/posts/beauty/Beauty2';
import Beauty3 from './page/posts/beauty/Beauty3';
import Hobby1 from './page/posts/hobby/Hobby1';
import Hobby2 from './page/posts/hobby/Hobby2';
import Hobby3 from './page/posts/hobby/Hobby3';
import Hobby4 from './page/posts/hobby/Hobby4';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          extact={true}
          element={<Main />}
        />
        <Route
          path="/game1"
          extact={true}
          element={<Main post={<Game1 />} />}
        />
        <Route
          path="/game2"
          extact={true}
          element={<Main post={<Game2 />} />}
        />
        <Route
          path="/game3"
          extact={true}
          element={<Main post={<Game3 />} />}
        />
        <Route
          path="/food1"
          extact={true}
          element={<Main post={<Food1 />} />}
        />
        <Route
          path="/food2"
          extact={true}
          element={<Main post={<Food2 />} />}
        />
        <Route
          path="/food3"
          extact={true}
          element={<Main post={<Food3 />} />}
        />
        <Route
          path="/beauty1"
          extact={true}
          element={<Main post={<Beauty1 />} />}
        />
        <Route
          path="/beauty2"
          extact={true}
          element={<Main post={<Beauty2 />} />}
        />
        <Route
          path="/beauty3"
          extact={true}
          element={<Main post={<Beauty3 />} />}
        />
        <Route
          path="/hobby1"
          extact={true}
          element={<Main post={<Hobby1 />} />}
        />
        <Route
          path="/hobby2"
          extact={true}
          element={<Main post={<Hobby2 />} />}
        />
        <Route
          path="/hobby3"
          extact={true}
          element={<Main post={<Hobby3 />} />}
        />
        <Route
          path="/hobby4"
          extact={true}
          element={<Main post={<Hobby4 />} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
