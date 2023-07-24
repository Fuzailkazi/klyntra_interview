import React from 'react';

const MyBusiness = () => {
  return (
    <>
      <div className='grid grid-cols-5 grid-rows-3 gap-4 mt-10'>
        <div className='row-span-3 border border-gray-300 p-4 bg-red-300'>
          <h2 className='text-2xl font-bold mb-4'>Problem</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              - Lack of personalized and exclusive content for football fans.
            </li>
            <li className='text-lg'>
              - No ownership or tradable digital assets for fans.
            </li>
            <li className='text-lg'>
              - Difficulty in showcasing support and loyalty for their favorite
              teams/players
            </li>
          </ul>
          <h2 className='text-2xl font-light mt-10'>Existing Alternatives</h2>
          <ul className='list-inside'>
            <li className='text-lg'>-No such product / platform exists </li>
          </ul>
        </div>
        <div className='border row-span-1 border-gray-300 p-4 bg-green-300'>
          <h2 className='text-xl font-bold mb-2'>Solution</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              - An online platform that lets football fans buy, sell, and trade
              digital assets (NFTs).
            </li>
            <li className='text-lg'>
              - Exclusive NFTs for iconic football moments, player cards,
              autographs, etc.
            </li>
            <li className='text-lg'>
              - Partnerships with football clubs and players to create unique,
              official NFTs.
            </li>
            <li className='text-lg'>
              - Secure blockchain technology ensuring the authenticity and
              ownership of each NFT
            </li>
          </ul>
        </div>
        <div className='col-span-1 row-span-3 border border-gray-300 p-4 bg-blue-300'>
          <h2 className='text-2xl font-bold mb-4'>Unique Value Proposition</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              -Empowering football fans by offering them exclusive, collectible,
              and tradable digital assets linked with their favorite teams and
              players.
            </li>
          </ul>
          <h2 className='text-2xl font-light mb-4'>High-Level Concepts</h2>
          <ul className='list-inside'>
            <li className='text-lg'>- zk Proofs.</li>
            <li className='text-lg'>- Dynamic NFTs.</li>
            <li className='text-lg'>- Build a Protocol for the platform.</li>
          </ul>
        </div>
        <div className='border border-gray-300 p-4 bg-yellow-300'>
          <h2 className='text-xl font-bold mb-2'>Unfair Advantage</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              - Exclusive partnerships with renowned football clubs and players.
            </li>
            <li className='text-lg'>
              - Expertise in the field of NFTs and blockchain technology.
            </li>
            <li className='text-lg'>
              - Strong community of football fans engaged through the platform.
            </li>
            <li className='text-lg'>
              - First mover advantage in creating football-specific NFTs.
            </li>
          </ul>
        </div>
        <div className='col-span-1 row-span-3 border border-gray-300 p-4 bg-orange-400'>
          <h2 className='text-2xl font-bold mb-4'>Customer Segments</h2>
          <ul className='list-inside'>
            <li className='text-lg'>- Football fans globally</li>
            <li className='text-lg'>- Collectors of sports memorabilia</li>
            <li className='text-lg'>- Football clubs and organizations.</li>
            <li className='text-lg'>
              - Digital investors and blockchain enthusiasts.
            </li>
          </ul>
          <h2 className='text-2xl font-light mb-4'>Early Adopters</h2>
          <ul className='list-inside'>
            <li className='text-lg'>hello</li>
          </ul>
        </div>
        <div className='border row-span-1.5 border-gray-300 p-4 bg-red-600'>
          <h2 className='text-xl font-bold mb-2'>Key Metrics</h2>
          <ul className='list-inside'>
            <li className='text-lg'>- Number of registered users</li>
            <li className='text-lg'>
              - Number of transactions (buys/sells/trades).
            </li>
            <li className='text-lg'>
              - Revenue generated from transactions and premium features.
            </li>
            <li className='text-lg'>- Growth in new users</li>
            <li className='text-lg'>
              - User engagement rates on the platform and social media.
            </li>
          </ul>
        </div>

        <div className='border border-gray-300 p-4 bg-pink-600'>
          <h2 className='text-xl font-bold mb-2'>Channels</h2>
          <ul className='list-inside'>
            <li className='text-lg'>- Online website and mobile app.</li>
            <li className='text-lg'>
              - Social media platforms for marketing and user engagement.
            </li>
            <li className='text-lg'>
              - Collaboration with football clubs and organizations for
              promotion
            </li>
            <li className='text-lg'>
              - NFT marketplaces for wider exposure and credibility.
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <div className='border border-gray-300 p-4 col-span-2 bg-emerald-700'>
          <h2 className='text-xl font-bold mb-2'>Cost Structure</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              - Development and maintenance of the platform.
            </li>
            <li className='text-lg'>- Marketing and promotional expenses.</li>
            <li className='text-lg'>- Blockchain transaction costs.</li>
            <li className='text-lg'>
              - Legal and regulatory compliance costs.
            </li>
          </ul>
        </div>
        <div className='border border-gray-300 p-4 col-span-2 bg-purple-500'>
          <h2 className='text-xl font-bold mb-2'>Revenue Streams</h2>
          <ul className='list-inside'>
            <li className='text-lg'>
              - Transaction fees for buying, selling, and trading NFTs
            </li>
            <li className='text-lg'>
              - Partnership deals with football clubs and players.
            </li>
            <li className='text-lg'>
              - Premium features or early access to exclusive NFT drops
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MyBusiness;
