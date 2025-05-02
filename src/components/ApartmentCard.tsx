import { Link } from "react-router-dom";

type ApartmentCardProps = {
  id: string;
  number: string;
  area: number;
  price: number;
  isAvailable: boolean;
  finishing: "fully_finished" | "semi_finished" | "core_shell";
  view: string;
  imageUrls: (string | null)[];
};

const finishingLabels = {
  fully_finished: "Fully Finished",
  semi_finished: "Semi-Finished",
  core_shell: "Core & Shell",
};

export function ApartmentCard({
  id,
  number,
  area,
  price,
  isAvailable,
  finishing,
  view,
  imageUrls,
}: ApartmentCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {imageUrls[0] && (
        <img
          src={imageUrls[0]}
          alt={`Apartment ${number}`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">Apartment #{number}</h3>
          <span
            className={`px-2 py-1 rounded text-sm ${
              isAvailable
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {isAvailable ? "Available" : "Not Available"}
          </span>
        </div>
        <div className="space-y-2 text-gray-600">
          <p>Area: {area} m²</p>
          <p>Price: ${price.toLocaleString()}</p>
          <p>Finishing: {finishingLabels[finishing]}</p>
          <p>View: {view}</p>
        </div>
        <Link
          to={`/apartments/${number}`}
          className="mt-4 block w-full bg-indigo-600 text-white text-center py-2 rounded-md hover:bg-indigo-700 transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
