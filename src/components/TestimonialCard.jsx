import Image from "next/image";
import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial, name, title, imageUrl }) => {
  const finalImageUrl = imageUrl || "/avatar.png";

  return (
    <figure className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md mx-auto flex flex-col gap-4">
      {/* Stars */}
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="h-5 w-5" />
        ))}
      </div>

      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-base leading-relaxed">
        <p>&ldquo;{testimonial}&rdquo;</p>
      </blockquote>

      {/* User Info */}
      <figcaption className="flex items-center mt-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={finalImageUrl}
            alt={name || "User"}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div>
          <div className="text-gray-900 font-semibold text-base">{name}</div>
          <div className="text-gray-500 text-sm">{title}</div>
        </div>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
