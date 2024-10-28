import { useSelector } from "react-redux";

function capitalize(val) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export default function CarsList() {
  const { brand, model, year, price } = useSelector((state) => state.car);
  return (
    <div className="p-6">
      <h3 className="font-bold text-xl">
        {capitalize(brand)}{" "}
        <span className="italic">{model.toUpperCase()}</span> {year}
      </h3>
      <p className="text-4xl text-green-600 font-medium">USD {price}</p>
    </div>
  );
}
