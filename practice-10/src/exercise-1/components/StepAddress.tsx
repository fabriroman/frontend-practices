import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { addressSchema } from "../validation/schemas";
import "../styles/FormStep.css";

export type AddressValues = {
  country: string;
  city: string;
  zipCode: string;
};

type StepAddressProps = {
  onSubmit: (data: AddressValues) => void;
  onBack: () => void;
  initialData?: AddressValues;
};

export const StepAddress = ({
  onSubmit,
  onBack,
  initialData,
}: StepAddressProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<AddressValues>({
    resolver: yupResolver(addressSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  return (
    <div className="form-step">
      <h2 className="form-step__title">Step 2: Address</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-step__form">
        <div className="form-step__group">
          <label htmlFor="country" className="form-step__label">
            Country:
          </label>
          <input
            id="country"
            type="text"
            {...register("country")}
            className={`form-step__input ${
              errors.country ? "form-step__input--error" : ""
            }`}
            placeholder="Enter your country"
          />
          {errors.country && (
            <span className="form-step__error">{errors.country.message}</span>
          )}
        </div>

        <div className="form-step__group">
          <label htmlFor="city" className="form-step__label">
            City:
          </label>
          <input
            id="city"
            type="text"
            {...register("city")}
            className={`form-step__input ${
              errors.city ? "form-step__input--error" : ""
            }`}
            placeholder="Enter your city"
          />
          {errors.city && (
            <span className="form-step__error">{errors.city.message}</span>
          )}
        </div>

        <div className="form-step__group">
          <label htmlFor="zipCode" className="form-step__label">
            Zip Code:
          </label>
          <input
            id="zipCode"
            type="text"
            {...register("zipCode")}
            className={`form-step__input ${
              errors.zipCode ? "form-step__input--error" : ""
            }`}
            placeholder="e.g., 12345 or 12345-6789"
          />
          {errors.zipCode && (
            <span className="form-step__error">{errors.zipCode.message}</span>
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
