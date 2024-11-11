import { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const DownloadButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [checkmarkVisible, setCheckmarkVisible] = useState(false);

  const downloadUrl =
    "https://drive.google.com/uc?id=1tuS9QSKXAR9Bvu_XM24xYC0bu7mP21Ej";

  const handleDownload = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCheckmarkVisible(false);

    setTimeout(() => {
      setIsLoading(false);
      setDownloaded(true);
      setCheckmarkVisible(true);

      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => {
        setDownloaded(false);
        setCheckmarkVisible(false);
      }, 2000);
    }, 2000);
  };

  return (
    <div className="flex justify-center py-10">
      <button
        type="button"
        onClick={handleDownload}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#8788ed] transition ease-in-out duration-150 cursor-pointer"
      >
        {isLoading ? (
          <AiOutlineLoading3Quarters size={20} className="mr-2 animate-spin" />
        ) : downloaded && checkmarkVisible ? (
          <IoMdCheckmark
            size={25}
            className={`mr-2 transition-opacity duration-500 ${
              checkmarkVisible ? "opacity-100" : "opacity-0"
            }`}
          />
        ) : (
          <IoDownloadOutline
            size={25}
            className={`mr-2 transition-opacity duration-500 animate-pulse ${
              downloaded ? "opacity-0" : "opacity-100"
            }`}
          />
        )}
        Download CV
      </button>
    </div>
  );
};

export default DownloadButton;
