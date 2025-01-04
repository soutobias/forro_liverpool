import styles from "./Bg.module.css";
import { useEffect, useRef, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { images, CustomImage } from "../data/images";
import Share from "yet-another-react-lightbox/plugins/share";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import { useMediaQuery } from "react-responsive";

import {
  CheckSquare,
  Copy,
  DownloadSimple,
  EnvelopeSimple,
  FacebookLogo,
  WhatsappLogo,
} from "phosphor-react";
import { FlashMessages } from "./FlashMessages";
import { useLanguage } from "@/lib/language";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width: width * 3,
  height: height * 3,
  description: "Photos by Dan Polari!",
}));

const imagesLarge = images.map((image) => ({
  ...image,
  width: image.width * 3,
  height: image.height * 3,
}));

export function FestivalPhotos() {
  const { language } = useLanguage();
  const [index, setIndex] = useState(-1);
  const [copied, setCopied] = useState(false);
  const handleClick = (index: number, item: CustomImage) => setIndex(index);
  const zoomRef = useRef(null);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" }); // Check if screen is large or larger
  const [showFlashMessage, setShowFlashMessage] = useState<any>(null);

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timeout);
    }
  }, [copied]);

  const handleShare = (platform: string) => {
    const currentImage = slides[index]?.src;
    const shareText = encodeURIComponent("Check out this amazing photo!");
    const shareUrl = encodeURIComponent(currentImage);

    if (platform === "instagramDirect") {
      window.open(
        `https://www.instagram.com/direct/inbox/?url=${shareUrl}`,
        "_blank",
      );
    } else if (platform === "instagramStories") {
      window.open(
        `https://www.instagram.com/stories/create/?url=${shareUrl}`,
        "_blank",
      );
    } else if (platform === "facebookPost") {
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
        "_blank",
      );
    } else if (platform === "facebookMessenger") {
      window.open(
        `https://www.facebook.com/dialog/send?link=${shareUrl}&app_id=123456789&redirect_uri=${window.location.href}`,
        "_blank",
      );
    } else if (platform === "email") {
      window.location.href = `mailto:?subject=${shareText}&body=${shareUrl}`;
    } else if (platform === "copyLink") {
      setCopied(true);
      setShowFlashMessage({
        message: "Photo copied to clipboard!",
        messageTranslation: "Foto copiada para a área de transferência!",
        messageType: "success",
      });
      navigator.clipboard.writeText(currentImage);
    } else if (platform === "whatsapp") {
      window.open(
        `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
        "_blank",
      );
    }
  };

  const handleDownload = () => {
    const currentImage = slides[index]?.src;
    if (currentImage) {
      const link = document.createElement("a");
      link.href = currentImage;
      link.target = "_blank"; // Open in a new tab
      link.download = `image-${index + 1}.jpg`;
      link.click();
    }
  };

  return (
    <div className={`p-2 md:p-10 ${styles.blackBg}`}>
      <Gallery
        images={isLargeScreen ? imagesLarge : images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        zoom={{ ref: zoomRef }}
        render={{
          controls: () => (
            <div>
              <div className="absolute bottom-20 md:left-10 left-[32%] !text-white">
                {language === "en"
                  ? "Photos by Dan Polari"
                  : "Fotos por Dan Polari"}
              </div>
              <div className="absolute bottom-3 right-4 flex flex-wrap gap-3">
                <button
                  title="Share on Facebook"
                  onClick={() => handleShare("facebookPost")}
                >
                  <FacebookLogo color="#EAEAEA" size={32} />
                </button>
                <button
                  title="Share on Email"
                  onClick={() => handleShare("email")}
                >
                  <EnvelopeSimple color="#EAEAEA" size={32} />
                </button>
                <button
                  title="Share on Whatsapp"
                  onClick={() => handleShare("whatsapp")}
                >
                  <WhatsappLogo color="#EAEAEA" size={32} />
                </button>
                <button
                  title="Copy Link"
                  onClick={() => handleShare("copyLink")}
                >
                  {copied ? (
                    <CheckSquare color="#EAEAEA" size={32} />
                  ) : (
                    <Copy color="#EAEAEA" size={32} />
                  )}
                </button>
                <button title="Download" onClick={handleDownload}>
                  <DownloadSimple color="#EAEAEA" size={32} />
                </button>
              </div>
              {showFlashMessage && (
                <FlashMessages
                  duration={3000}
                  position={"bleft"}
                  width={"medium"}
                  showFlashMessage={showFlashMessage}
                  setShowFlashMessage={setShowFlashMessage}
                />
              )}
            </div>
          ),
        }}
        plugins={[Share, Zoom]}
      />
    </div>
  );
}
