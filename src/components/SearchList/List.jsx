import { useState } from 'react';
import { pokemons } from '../../data/list';
import { Item } from './Item';

// Un array en un estado de React puede cambiar su valor durante el ciclo de vida del componente y provoca una re-renderización, mientras que un array en una constante no puede cambiar su valor una vez definido.

// const Substring = (text) => {
// 	const textArray = text.split(new RegExp(`(${search})`));

// 	return (
// 		<li key={text}>
// 			{textArray.map((t, i) => (
// 				<span
// 					key={i}
// 					style={
// 						t.toLowerCase() === search.toLowerCase()
// 							? { fontWeight: 'bold', color: 'red' }
// 							: {}
// 					}
// 				>
// 					{t}
// 				</span>
// 			))}
// 		</li>
// 	);
// };

export const List = () => {
	const [data, setData] = useState(pokemons);
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		setSearch(e.target.value);

		const dataFilter = pokemons.filter((p) =>
			p.toLowerCase().includes(e.target.value.toLowerCase())
		);

		const dataSorted = dataFilter.sort((a, b) => a.localeCompare(b));

		setData(dataFilter.length === pokemons.length ? pokemons : dataSorted);
	};

	const handleRemove = (item) => {
		setData((prev) => prev.filter((p) => p !== item));
	};

	return (
		<div>
			<div>
				<label htmlFor="search">Buscar</label>
				<input
					type="text"
					id="search"
					placeholder="Ej. Metapod"
					autoComplete="off"
					value={search}
					onChange={handleSearch}
				/>
			</div>
			<ul>
				{data.map((pokemon) => (
					<Item key={pokemon} pokemon={pokemon} handleRemove={handleRemove} />
				))}
			</ul>
		</div>
	);
};
