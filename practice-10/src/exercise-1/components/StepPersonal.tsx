import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { personalInfoSchema } from "../validation/schemas";
import "../styles/FormStep.css";

export type PersonalInfoValues = {
  name: string;
  age: number;
  email: string;
};

type StepPersonalProps = {
  onSubmit: (data: PersonalInfoValues) => void;
  initialData?: PersonalInfoValues;
};

export const StepPersonal = ({ onSubmit, initialData }: StepPersonalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<PersonalInfoValues>({
    resolver: yupResolver(personalInfoSchema),
    defaultValues: initialData,
    mode: "onChange",
  });

  return (
    <div className="form-step">
      <h2 className="form-step__title">Step 1: Personal Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-step__form">
        <div className="form-step__group">
          <label htmlFor="name" className="form-step__label">
            Name:
          </label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className={`form-step__input ${
              errors.name ? "form-step__input--error" : ""
            }`}
            placeholder="Enter your full name"
            autoFocus={!!errors.name}
          />
          {errors.name && (
            <span className="form-step__error">{errors.name.message}</span>
          )}
        </div>

        <div className="form-step__group">
          <label htmlFor="age" className="form-step__label">
            Age:
          </label>
          <input
            id="age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            className={`form-step__input ${
              errors.age ? "form-step__input--error" : ""
            }`}
            placeholder="Enter your age"
            autoFocus={!errors.name && !!errors.age}
          />
          {errors.age && (
            <span className="form-step__error">{errors.age.message}</span>
          )}
        </div>

        <div className="form-step__group">
          <label htmlFor="email" className="form-step__label">
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={`form-step__input ${
              errors.email ? "form-step__input--error" : ""
            }`}
            placeholder="example@email.com"
            autoFocus={!errors.name && !errors.age && !!errors.email}
          />
          {errors.email && (
            <span className="form-step__error">{errors.email.message}</span>
          )}
        </div>

        <div className="form-step__actions">
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
