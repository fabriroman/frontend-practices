import type { PersonalInfoValues } from "./StepPersonal";
import type { AddressValues } from "./StepAddress";
import type { PreferencesValues } from "./StepPreferences";
import "../styles/FormStep.css";
import "../styles/StepReview.css";

export type FormData = PersonalInfoValues & AddressValues & PreferencesValues;

export type StepReviewProps = {
  data: FormData;
  onSubmit: () => void;
  onBack: () => void;
};

export const StepReview = ({ data, onSubmit, onBack }: StepReviewProps) => {
  return (
    <div className="form-step">
      <h2 className="form-step__title">Step 4: Review</h2>

      <div className="form-step__review-section">
        <h3 className="form-step__review-subtitle">Personal Information</h3>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Name:</span>
          <span className="form-step__review-value">{data.name}</span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Age:</span>
          <span className="form-step__review-value">{data.age} years</span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Email:</span>
          <span className="form-step__review-value">{data.email}</span>
        </div>
      </div>

      <div className="form-step__review-section">
        <h3 className="form-step__review-subtitle">Address</h3>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Country:</span>
          <span className="form-step__review-value">{data.country}</span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">City:</span>
          <span className="form-step__review-value">{data.city}</span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Zip Code:</span>
          <span className="form-step__review-value">{data.zipCode}</span>
        </div>
      </div>

      <div className="form-step__review-section">
        <h3 className="form-step__review-subtitle">Preferences</h3>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Contact Method:</span>
          <span className="form-step__review-value">
            {data.contactMethod === "email" && "Email"}
            {data.contactMethod === "phone" && "Phone"}
            {data.contactMethod === "whatsapp" && "WhatsApp"}
          </span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">
            Newsletter Subscription:
          </span>
          <span className="form-step__review-value">
            {data.subscribeNewsletter ? "Subscribed" : "Not subscribed"}
          </span>
        </div>
        <div className="form-step__review-field">
          <span className="form-step__review-label">Favorite Category:</span>
          <span className="form-step__review-value">
            {data.favoriteCategory === "technology" && "Technology"}
            {data.favoriteCategory === "health" && "Health"}
            {data.favoriteCategory === "art" && "Art"}
            {data.favoriteCategory === "travel" && "Travel"}
          </span>
        </div>
      </div>

      <div className="form-step__actions">
        <button
          type="button"
          onClick={onBack}
          className="form-step__button form-step__button--secondary"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="form-step__button form-step__button--primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
