import { Notification } from "./components/Notification.tsx";
import { TriggerButton } from "./components/TriggerButton.tsx";
import { TriggerButton2 } from "./components/TriggerButton2.tsx";
import "./styles/App.css";

function App() {
  return (
    <>
      <Notification />
      <nav className="app-nav">
        <h1 className="app-nav__title">Notifications</h1>
        <TriggerButton2
          message="Message from the navbar"
          type="success"
          buttonText="Success in navbar"
        />
      </nav>
      <main className="app-main">
        <h1 className="app-main__content">Main content</h1>
        <div className="app-main__actions">
          <TriggerButton
            message="Message from the content"
            type="info"
            buttonText="Info in content"
          />
          <TriggerButton
            message="Message from the content"
            type="error"
            buttonText="Error in content"
          />
        </div>
      </main>
    </>
  );
}

export default App;
