import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Modal from "react-modal"; // Import Modal for the pop-up

const AssetCard = ({ title, price, imageSrc, link, eventType, artistName, mint }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleConfirmPurchase = () => {
    mint(); // Trigger the minting function
    closeModal(); // Close the modal after confirming
  };

  return (
    <div className="card-container" style={{ paddingBottom: 20 }}>
      <Link to={link}>
        <img
          src={imageSrc}
          alt={title}
          style={{ borderRadius: 12, maxHeight: 360 }}
        />
      </Link>
      <button className="card-btn" onClick={openModal}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20 }}>
          <p style={{ fontSize: 16 }}>Buy</p>
          <FaLongArrowAltRight />
        </div>
      </button>
      <div className="card-details">
        <div className="card-header">
          <h2 className="card-name">{title}</h2>
          <p className="card-price" style={{ backgroundColor: "#ff7f00" }}>{price}</p>
        </div>
        <p style={{ color: "#b0b0b0", fontSize: 14 }}>{eventType}</p>
        <div className="profile-container" style={{ margin: "18px 0" }}>
          <div className="artist-name" style={{ color: "#ffffff" }}>{artistName}</div>
        </div>
      </div>

      {/* Modal for confirming the purchase */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Confirm Purchase"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Confirm Purchase</h2>
        <p>Are you sure you want to buy {title} for {price} ETH?</p>
        <button onClick={handleConfirmPurchase}>Confirm</button>
        <button onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default AssetCard;
