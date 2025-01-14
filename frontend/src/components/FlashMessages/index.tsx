import { CSSTransition } from "react-transition-group";
import styles from "./FlashMessages.module.css";
import classnames from "classnames";
import { useLanguage } from "@/lib/language";

interface FlashMessagesProps {
  width: any;
  duration: any;
  position: any;
  showFlashMessage: any;
  setShowFlashMessage: any;
}

export function FlashMessages({
  width,
  duration,
  position,
  showFlashMessage,
  setShowFlashMessage,
}: FlashMessagesProps) {
  const { language } = useLanguage();

  const ToastClassNames = {
    [styles.error]: showFlashMessage.messageType === "error",
    [styles.warning]: showFlashMessage.messageType === "warning",
    [styles.info]: showFlashMessage.messageType === "info",
    [styles.success]: showFlashMessage.messageType === "success",
    [styles.bleft]: position === "bleft",
    [styles.bright]: position === "bright",
    [styles.tright]: position === "tright",
    [styles.tleft]: position === "tleft",
    [styles.tcenter]: position === "tcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.bcenter]: position === "bcenter",
    [styles.fullWidth]: width === "full",
    [styles.smallWidth]: width === "small",
    [styles.mediumWidth]: width === "medium",
    [styles.largeWidth]: width === "large",
  };
  console.log("showFlashMessage", showFlashMessage);
  setTimeout(() => {
    setShowFlashMessage(null);
  }, duration);
  return (
    <div className={styles.rootStyle}>
      {showFlashMessage && (
        <CSSTransition
          in={showFlashMessage === null ? false : true}
          timeout={duration}
          classNames="toast"
          unmountOnExit
          onExit={() => setShowFlashMessage(null)}
        >
          <div
            id="flash-message"
            className={classnames(styles.toast, ToastClassNames)}
          >
            <div className={styles.toastMessage}>
              {language === "en"
                ? showFlashMessage.message
                : showFlashMessage.messageTranslation}
            </div>
          </div>
        </CSSTransition>
      )}
    </div>
  );
}
