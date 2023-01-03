
import categories from './api';
import './App.css';
import Row from "./components/Row";

function App() {
  return (
    <div className ="App">
    {/* Navbar */}
    {/* destaque */}
    {/* Em alta */}
    {categories.map((category, index) =>{
      return <Row
      key = {category.name}
      title = {category.title} 
      path = {category.path} 
      />;
    })}
    </div>
  );
}

export default App;
