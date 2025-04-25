import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial, name, title, imageUrl }) => {
  const finalImageUrl = imageUrl || "/avatar.png";

  return (
    <figure className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto">
      <div className="flex text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="h-5 w-5" />
        ))}
      </div>

      <blockquote className="text-gray-700 text-base leading-relaxed mb-6">
        {" "}
        <p>&ldquo;{testimonial}&rdquo;</p>
      </blockquote>

      <figcaption className="flex items-center">
        <div className="flex-shrink-0 mr-4">
          {" "}
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            {" "}
            <Image
              src={finalImageUrl}
              alt={name || "User"}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        <div>
          <div className="text-gray-900 font-semibold text-lg">{name}</div>{" "}
          <div className="text-gray-500 text-sm">{title}</div>{" "}
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
