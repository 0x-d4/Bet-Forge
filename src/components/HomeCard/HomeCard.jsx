import React from "react";
import "./HomeCard.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import avatar from "../../assets/avatar.png";

const HomeCard = ({ name, price, priceRange, description, artist, image, link }) => {
  return (
    <Link className="card-container" to={link}>
      <img src={image} alt="card" className="card-image" />
      <button className="card-btn">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
          }}
        >
          <p style={{ fontSize: 16 }}>Go to Collection</p>
          <FaLongArrowAltRight />
        </div>
      </button>
      <div className="card-details">
        <div className="card-header">
          <h2 className="card-name">{name}</h2>
          <p className="card-price">{price}</p>
        </div>
        <p style={{ color: "#b0b0b0", fontSize: 14 }}>{priceRange}</p>
        <p style={{ color: "#f0f0f0", lineHeight: "150%" }}>{description}</p>
        <div className="profile-container" style={{ margin: "18px 0" }}>
          <img src={avatar} alt="profile" style={{ width: 68, height: 68 }} />
          <div className="profile-details">
            <div className="artist" style={{ color: "#b0b0b0" }}>Artist</div>
            <div className="artist-name" style={{ color: "#ffffff" }}>
              {artist}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HomeCard;
