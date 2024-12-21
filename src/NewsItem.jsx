import React from "react";

const NewsItem = ({ image, title, description, url }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-200 p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="font-semibold text-lg text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a href={url}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-3 rounded text-sm self-start">
          Read More
        </button>
      </a>
    </div>
  );
};

export default NewsItem;
