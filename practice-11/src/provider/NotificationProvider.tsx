import {
  NotificationContext,
  type NotificationContextValue,
  type NotificationData,
} from "../context/NotificationContext";
import { useState, useEffect, useRef, type ReactNode } from "react";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationData | null>(
    null
  );
  const [queue, setQueue] = useState<NotificationData[]>([]);
  const timeoutRef = useRef<number | null>(null);

  const showNotification = (newNotification: NotificationData) => {
    if (!notification) {
      setNotification(newNotification);
    } else {
      setQueue((prev) => [...prev, newNotification]);
    }
  };

  const clearNotifications = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setNotification(null);
  };

  const processQueue = () => {
    if (queue.length > 0) {
      const nextNotification = queue[0];
      setQueue((prev) => prev.slice(1));
      setNotification(nextNotification);
    }
  };

  useEffect(() => {
    if (!notification && queue.length > 0) {
      processQueue();
    }
    timeoutRef.current = setTimeout(() => {
      setNotification(null);
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, [notification, queue]);

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
