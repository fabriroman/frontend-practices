import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import "../styles/Notification.css";

export const Notification = () => {
  const { notification, clearNotifications } = useContext(NotificationContext);

  if (!notification) return null;

  return (
    <div className={`notification notification--${notification.type}`}>
      <span className="notification__message">{notification.message}</span>
      <button className="notification__close" onClick={clearNotifications}>
        ×
      </button>
    </div>
  );
};
