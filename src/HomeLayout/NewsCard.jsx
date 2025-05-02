import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaStar, FaEye } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  const formattedDate = new Date(
    news.author.published_date
  ).toLocaleDateString();

  return (
    <div className="card bg-base-100 shadow-md border-0 max-w-xl mx-auto mt-5">
      <div className="card-body p-4">
        {/* Header Section: Author info, share and bookmark icons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-10 rounded-full">
                <img src={author?.img} alt={author?.name || "Author"} />
              </div>
            </div>
            <div>
              <p className="font-semibold text-sm text-gray-800">
                {author?.name || "Unknown Author"}
              </p>
              <p className="text-xs text-gray-500">{formattedDate}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <button className="hover:text-gray-600">
              <CiBookmark size={24} />
            </button>
            <button className="hover:text-gray-600">
              <CiShare2 size={24} />
            </button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        {/* Thumbnail Image */}
        {thumbnail_url && (
          <figure className="mt-3">
            <img
              src={thumbnail_url}
              alt={title}
              className="rounded-md w-full h-48 object-cover"
            />
          </figure>
        )}

        {/* Details / Excerpt */}
        <p className="text-sm text-gray-500 mt-3">
          {details?.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <span className="text-orange-600 font-semibold cursor-pointer ml-1">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
        <hr className="mt-4 border-gray-400" />
        {/* Footer: Rating & Views */}
        <div className="flex items-center justify-between text-sm mt-4">
          <div className="flex items-center gap-1 text-orange-500">
            {Array.from({ length: Math.round(rating?.number || 0) }, (_, i) => (
              <FaStar key={i} />
            ))}
            <span className="text-black ml-1">{rating?.number || 0}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <FaEye />
            <span>{total_view || 0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
