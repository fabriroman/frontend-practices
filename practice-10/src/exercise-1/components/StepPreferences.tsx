import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { preferencesSchema } from "../validation/schemas";
import "../styles/FormStep.css";
import "../styles/StepPreferences.css";

type ContactMethod = "email" | "phone" | "whatsapp";
type Category = "technology" | "health" | "art" | "travel";

export type PreferencesValues = {
  contactMethod: ContactMethod;
  subscribeNewsletter: boolean;
  favoriteCategory: Category;
};

const defaultFormValues: PreferencesValues = {
  contactMethod: "email",
  subscribeNewsletter: false,
  favoriteCategory: "technology",
};

type StepPreferencesProps = {
  onSubmit: (data: PreferencesValues) => void;
  onBack: () => void;
  initialData?: PreferencesValues;
};

export const StepPreferences = ({
  onSubmit,
  onBack,
  initialData,
}: StepPreferencesProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PreferencesValues>({
    resolver: yupResolver(preferencesSchema),
    defaultValues: initialData || defaultFormValues,
    mode: "onChange",
  });

  return (
    <div className="form-step">
      <h2 className="form-step__title">Step 3: Preferences</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-step__form">
        <div className="form-step__group">
          <label className="form-step__label">Preferred Contact Method:</label>
          <div className="form-step__radio-group">
            <div className="form-step__radio-option">
              <input
                type="radio"
                id="email"
                value="email"
                {...register("contactMethod")}
                className="form-step__radio"
              />
              <label htmlFor="email" className="form-step__radio-label">
                Email
              </label>
            </div>
            <div className="form-step__radio-option">
              <input
                type="radio"
                id="phone"
                value="phone"
                {...register("contactMethod")}
                className="form-step__radio"
              />
              <label htmlFor="phone" className="form-step__radio-label">
                Phone
              </label>
            </div>
            <div className="form-step__radio-option">
              <input
                type="radio"
                id="whatsapp"
                value="whatsapp"
                {...register("contactMethod")}
                className="form-step__radio"
              />
              <label htmlFor="whatsapp" className="form-step__radio-label">
                WhatsApp
              </label>
            </div>
          </div>
          {errors.contactMethod && (
            <span className="form-step__error">
              {errors.contactMethod.message}
            </span>
          )}
        </div>

        <div className="form-step__group">
          <div className="form-step__checkbox-group">
            <input
              type="checkbox"
              id="subscribeNewsletter"
              {...register("subscribeNewsletter")}
              className="form-step__checkbox"
            />
            <label
              htmlFor="subscribeNewsletter"
              className="form-step__checkbox-label"
            >
              Subscribe to Newsletter
            </label>
          </div>
        </div>

        <div className="form-step__group">
          <label htmlFor="favoriteCategory" className="form-step__label">
            Favorite Category:
          </label>
          <select
            id="favoriteCategory"
            {...register("favoriteCategory")}
            className={`form-step__select ${
              errors.favoriteCategory ? "form-step__select--error" : ""
            }`}
          >
            <option value="technology">Technology</option>
            <option value="health">Health</option>
            <option value="art">Art</option>
            <option value="travel">Travel</option>
          </select>
          {errors.favoriteCategory && (
            <span className="form-step__error">
              {errors.favoriteCategory.message}
            </span>
          )}
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
            type="submit"
            className="form-step__button form-step__button--primary"
            disabled={!isValid}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};
