import React, { useEffect, useState } from "react";

const images = [
  "https://i.ibb.co/0RGHzYfK/1-Hot-Deepika-Padukones-photoshoot-for-Elle-is-simply-wow.jpg",
  "https://i.ibb.co/VWwMB5Cs/2.jpg",
  "https://i.ibb.co/RnyWsSy/3.jpg",
  "https://i.ibb.co/spfbm3Q6/4.jpg",
  "https://i.ibb.co/Qv4grx6W/4de0a90b805eb8edefe0f85a0a8c8b2d.jpg",
  "https://i.ibb.co/9ktDmNbR/5.jpg",
  "https://i.ibb.co/FLffK59X/6.jpg",
  "https://i.ibb.co/JjStrP8X/6b40cf30b0237a50354a6a82bc6bdc31.webp",
  "https://i.ibb.co/qYyNzKYQ/08e5c04be4f5eb8e856f2b74acc271df.jpg",
  "https://i.ibb.co/kV22tjrz/36ba0dea4a33cd6106f07b2ff35edb38.jpg",
  "https://i.ibb.co/W4jMc5Mt/63a05811c515d90c173ae83ea11043de.webp",
  "https://i.ibb.co/DgfhvbNB/334d9104351bd5d807ca5a5004cdde6a.jpg",
  "https://i.ibb.co/Z6Kn3w4K/360-F-812972184-x5z-WWI0-F61-GAq-Om-LVcti-F9-HTI8ti-FEBV.jpg",
  "https://i.ibb.co/zTDmn2ww/880-BB7-F4-5-B39-49-F8-9-A61-D1-E1606-BAC7-B.webp",
  "https://i.ibb.co/fGKdMC42/b7a4855f729b7aa1840d7df229270d57.jpg",
  "https://i.ibb.co/nqLBVSRh/devi-7312-8683305-2.webp",
  "https://i.ibb.co/Q71GSx2m/devi-7720-9683305-1.webp",
  "https://i.ibb.co/mF9ysJCS/sexy-carefree-girl-bold-dress-sexy-woman-orange-print-dress-510370-44.jpg",
  "https://i.ibb.co/C5wh8C51/woman-g6b0bea1c3-1280-768x576.jpg",
];

// Split into 3 parts (adjust sizes as needed)
const chunk1 = images.slice(0, 6);
const chunk2 = images.slice(6, 12);
const chunk3 = images.slice(12);

const Women = () => {
  // One current index per chunk
  const [currentIndexes, setCurrentIndexes] = useState([0, 0, 0]);

  useEffect(() => {
    const intervals = [
      setInterval(() => {
        setCurrentIndexes((prev) => [
          (prev[0] + 1) % chunk1.length,
          prev[1],
          prev[2],
        ]);
      }, 3000),
      setInterval(() => {
        setCurrentIndexes((prev) => [
          prev[0],
          (prev[1] + 1) % chunk2.length,
          prev[2],
        ]);
      }, 3500),
      setInterval(() => {
        setCurrentIndexes((prev) => [
          prev[0],
          prev[1],
          (prev[2] + 1) % chunk3.length,
        ]);
      }, 4000),
    ];

    return () => intervals.forEach(clearInterval);
  }, []);

  const handlePrev = (col) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => {
        if (i === col) {
          if (i === 0) return (val - 1 + chunk1.length) % chunk1.length;
          if (i === 1) return (val - 1 + chunk2.length) % chunk2.length;
          if (i === 2) return (val - 1 + chunk3.length) % chunk3.length;
        }
        return val;
      })
    );
  };

  const handleNext = (col) => {
    setCurrentIndexes((prev) =>
      prev.map((val, i) => {
        if (i === col) {
          if (i === 0) return (val + 1) % chunk1.length;
          if (i === 1) return (val + 1) % chunk2.length;
          if (i === 2) return (val + 1) % chunk3.length;
        }
        return val;
      })
    );
  };

  // Array of chunks for easier rendering
  const chunks = [chunk1, chunk2, chunk3];

  return (
    <div className="max-w-screen-2xl mx-auto">
      <div>
        {" "}
        <h1 className="capitalize text-5xl text-center font-bold text-amber-500 my-6">
          this is women page
        </h1>
        <div className="flex flex-col md:flex-row gap-4">
          {chunks.map((chunk, colIndex) => (
            <div key={colIndex} className="w-full md:w-1/3">
              <div className="carousel w-full relative overflow-hidden rounded-xl h-72 shadow-md bg-white flex items-center justify-center">
                <img
                  src={chunk[currentIndexes[colIndex]]}
                  alt={`Slide ${currentIndexes[colIndex] + 1}`}
                  className="w-full h-full object-contain rounded-xl"
                />

                <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 flex justify-between">
                  <button
                    onClick={() => handlePrev(colIndex)}
                    className="btn btn-circle"
                  >
                    ❮
                  </button>
                  <button
                    onClick={() => handleNext(colIndex)}
                    className="btn btn-circle"
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        habijabi
      </div>
    </div>
  );
};

export default Women;
