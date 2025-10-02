import type { ReactNode } from "react";
import { StepPersonal } from "../exercise-1/components/StepPersonal";
import "../exercise-1/styles/MultiStepForm.css";
import { StepAddress } from "../exercise-1/components/StepAddress";
import { StepPreferences } from "../exercise-1/components/StepPreferences";
import { StepReview } from "../exercise-1/components/StepReview";
import { useLocalStorageState } from "../exercise-1/hooks/useLocalStorageState";
import type { FormData } from "../exercise-1/components/StepReview";
import type { PersonalInfoValues } from "../exercise-1/components/StepPersonal";
import type { AddressValues } from "../exercise-1/components/StepAddress";
import type { PreferencesValues } from "../exercise-1/components/StepPreferences";

type StepConfig = {
  title: string;
  component: ReactNode;
};

type Steps = {
  [K in 1 | 2 | 3 | 4]: StepConfig;
};

const INITIAL_DATA: FormData = {
  // Personal Info
  name: "",
  age: 0,
  email: "",
  // Address
  country: "",
  city: "",
  zipCode: "",
  // Preferences
  contactMethod: "email",
  subscribeNewsletter: false,
  favoriteCategory: "technology",
};

export const Exercise1 = () => {
  const {
    value: currentStep,
    setValue: setCurrentStep,
    clear: clearStep,
  } = useLocalStorageState<1 | 2 | 3 | 4>("multi_step_form_step", 1);
  const {
    value: formData,
    setValue: setFormData,
    clear: clearData,
  } = useLocalStorageState<FormData>("multi_step_form", INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prev: FormData) => ({
      ...prev,
      ...fields,
    }));
  };

  const handleNext = () => {
    setCurrentStep((prev) => {
      if (prev === 4) return prev;
      return (prev + 1) as 1 | 2 | 3 | 4;
    });
  };

  const handleBack = () => {
    setCurrentStep((prev) => {
      if (prev === 1) return prev;
      return (prev - 1) as 1 | 2 | 3 | 4;
    });
  };

  const handleSubmit = () => {
    clearData();
    clearStep();
    alert("Form submitted successfully!");
  };

  const steps: Steps = {
    1: {
      title: "Welcome",
      component: (
        <StepPersonal
          key="personal"
          initialData={formData}
          onSubmit={(data: PersonalInfoValues) => {
            updateFields(data);
            handleNext();
          }}
        />
      ),
    },
    2: {
      title: "Address",
      component: (
        <StepAddress
          key="address"
          initialData={formData}
          onSubmit={(data: AddressValues) => {
            updateFields(data);
            handleNext();
          }}
          onBack={handleBack}
        />
      ),
    },
    3: {
      title: "Preferences",
      component: (
        <StepPreferences
          key="preferences"
          initialData={formData}
          onSubmit={(data: PreferencesValues) => {
            updateFields(data);
            handleNext();
          }}
          onBack={handleBack}
        />
      ),
    },
    4: {
      title: "Review and submit",
      component: (
        <StepReview
          key="review"
          data={formData}
          onSubmit={handleSubmit}
          onBack={handleBack}
        />
      ),
    },
  };

  return (
    <div className="multi-step-form">
      <div className="multi-step-form__progress">
        {Object.entries(steps).map(([step, { title }]) => (
          <div key={step} className="multi-step-form__step-container">
            <div
              className={`multi-step-form__step ${
                currentStep >= Number(step)
                  ? "multi-step-form__step--active"
                  : ""
              } ${
                currentStep > Number(step)
                  ? "multi-step-form__step--completed"
                  : ""
              }`}
            >
              {step}
            </div>
            <span className="multi-step-form__step-title">{title}</span>
          </div>
        ))}
      </div>

      <div className="multi-step-form__content">
        {steps[currentStep].component}
      </div>
    </div>
  );
};
