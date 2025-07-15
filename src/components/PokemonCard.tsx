function PokemonCard({ pokemon }) {
  return (
    <figure>
      {pokemon.imgSrc !== undefined ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        <p>Image non disponible</p>
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
