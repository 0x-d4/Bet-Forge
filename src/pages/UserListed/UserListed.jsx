import React, { useEffect, useState } from "react";
import { usePublicClient, useAccount } from "wagmi";
import { marketAbi } from "../../abi/market"; 
import "./UserListed.css";
import { chainToChainConfig } from "../../Config";

const UserListed = () => {
  const publicClient = usePublicClient();
  const { chain } = useAccount();
  const [listedNFTs, setListedNFTs] = useState([]);

  useEffect(() => {
    const fetchListedNFTs = async () => {
      if (!chain) return;

      const marketAddress = chainToChainConfig(chain).market;

      const listings = await publicClient.readContract({
        address: marketAddress,
        abi: marketAbi,
        functionName: "getAllActiveListings", // Use the new function
      });

      setListedNFTs(listings);
    };

    fetchListedNFTs();
  }, [publicClient, chain]);

  return (
    <div className="user-listed-container">
      <h1>Available NFTs</h1>
      {listedNFTs.length > 0 ? (
        listedNFTs.map((nft, index) => (
          <div key={index} className="nft-card">
            <p>NFT ID: {nft.id}</p>
            <p>Price: {nft.price}</p>
          </div>
        ))
      ) : (
        <p>No NFTs listed for sale.</p>
      )}
    </div>
  );
};

export default UserListed;
