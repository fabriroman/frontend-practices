import { useContext } from "react";
import {
  NotificationContext,
  type NotificationData,
} from "../context/NotificationContext";
import "../styles/TriggerButton.css";

interface TriggerButton2Props {
  message: string;
  type: NotificationData["type"];
  buttonText?: string;
}

export const TriggerButton2 = ({
  message,
  type,
  buttonText = "Notificación",
}: TriggerButton2Props) => {
  const { showNotification } = useContext(NotificationContext);

  return (
    <button
      className="button button--navbar"
      onClick={() =>
        showNotification({
          message,
          type,
        })
      }
    >
      {buttonText}
    </button>
  );
};
