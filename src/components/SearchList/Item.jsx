export const Item = ({ pokemon, handleRemove }) => {
	console.log(pokemon);

	return (
		<li>
			{pokemon} <button onClick={() => handleRemove(pokemon)}>Eliminar</button>
		</li>
	);
};
