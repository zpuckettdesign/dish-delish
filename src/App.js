import Recipe from "./Recipe";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dish Delish</h1>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>

      <Recipe />
    </div>
  );
}
