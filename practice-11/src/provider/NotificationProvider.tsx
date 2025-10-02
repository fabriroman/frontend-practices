import {
  NotificationContext,
  type NotificationContextValue,
  type NotificationData,
} from "../context/NotificationContext";
import { useState, useEffect, type ReactNode } from "react";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );

  const showNotification = (notification: NotificationData) => {
    setNotification(notification);
  };

  const clearNotifications = () => {
    setNotification(null);
  };

  useEffect(() => {
    if (!notification) return;
    const timeoutId = setTimeout(() => {
      setNotification(null);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [notification]);

  const contextValue: NotificationContextValue = {
    notification: notification,
    showNotification: showNotification,
    clearNotifications: clearNotifications,
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
    </NotificationContext.Provider>
  );
};
