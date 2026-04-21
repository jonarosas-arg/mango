import * as React from "react";
import { NotificationProvider } from "./context/NotificationContext";
import { AppContent } from "./components/AppContent";

export default function App() {
  return (
    <NotificationProvider>
      <AppContent />
    </NotificationProvider>
  );
}
