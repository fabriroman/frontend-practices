import { useContext } from "react";
import {
  NotificationContext,
  type NotificationData,
} from "../context/NotificationContext";
import "../styles/TriggerButton.css";

interface TriggerButtonProps {
  message: string;
  type: NotificationData["type"];
  buttonText?: string;
}

export const TriggerButton = ({
  message,
  type,
  buttonText = "Lanzar notificación",
}: TriggerButtonProps) => {
  const { showNotification } = useContext(NotificationContext);

  return (
    <button
      className="button button--content"
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
