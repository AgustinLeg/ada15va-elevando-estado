import { useState } from 'react';
import './App.css';
import { List } from './components/SearchList/List';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="App">
			<h1>Clase 10</h1>
			<p>{count}</p>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<List />
		</div>
	);
}

export default App;
