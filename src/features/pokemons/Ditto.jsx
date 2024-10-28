import { useEffect, useState } from "react";
import { fetchDitto } from "../../services/apiPoke";

function Ditto() {
  const [ditto, setDitto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sprite, setSprite] = useState(0);

  useEffect(() => {
    async function dataDitto() {
      setIsLoading(true);
      setError(null);

      try {
        const data = await fetchDitto();
        setDitto(data);
      } catch (err) {
        setError("Failed to fetch Ditto data.", err);
      } finally {
        setIsLoading(false);
      }
    }

    dataDitto();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSprite((prev) => (prev + 1) % 4);
    }, 250);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Determine sprite URL based on `sprite` value
  const getSpriteSrc = () => {
    if (!ditto) return "";
    switch (sprite) {
      case 0:
        return ditto.sprites.front_default;
      case 1:
        return ditto.sprites.back_default;
      case 2:
        return ditto.sprites.front_shiny;
      case 3:
        return ditto.sprites.back_shiny;
      default:
        return ditto.sprites.front_default;
    }
  };

  return (
    <div className="h-52 mt-52 w-full flex justify-center items-center">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : ditto ? (
        <>
          <img
            className="h-40 w-40 transition-opacity duration-500 ease-in-out opacity-100"
            src={getSpriteSrc()}
            alt="Ditto Sprite"
          />
          <img
            className="h-40 w-40"
            src={ditto.sprites.other.home.front_default}
            alt="Ditto"
          />
          <img className="h-40 w-40" src={getSpriteSrc()} alt="Ditto Sprite" />
        </>
      ) : (
        <p>No Ditto data available.</p>
      )}
    </div>
  );
}

export default Ditto;
