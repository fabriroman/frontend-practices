import { createContext } from "react";

type NotificationType = "success" | "error" | "info";

export type NotificationData = {
  message: string;
  type: NotificationType;
};

export type NotificationContextValue = {
  notification: NotificationData | null;
  showNotification: (notification: NotificationData) => void;
  clearNotifications: () => void;
};

export const NotificationContext = createContext<NotificationContextValue>({
  notification: null,
  showNotification: () => {},
  clearNotifications: () => {},
});
