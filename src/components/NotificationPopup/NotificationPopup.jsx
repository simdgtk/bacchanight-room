import "./notification-popup.scss";

export default function NotificationPopup({ message, type }) {
  return (
    <div
      className={`notification-popup notification-popup--${type}`}
      style={{ zIndex: 5 }}
    >
      {message}
    </div>
  );
}
