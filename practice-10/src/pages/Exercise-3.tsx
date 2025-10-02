import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../exercise-3/styles/Form.css";

type FormValues = {
  name: string;
  rating: number | "";
  message: string;
};

const schema = Yup.object({
  name: Yup.string().trim().required("Name is required"),
  rating: Yup.number()
    .typeError("Select a rating from 1 to 5")
    .required("Rating is required")
    .min(1, "Min rating is 1")
    .max(5, "Max rating is 5"),
  message: Yup.string().when("rating", {
    is: (val: unknown) => typeof val === "number" && val < 3,
    then: (s) => s.trim().required("Message is required for ratings under 3"),
    otherwise: (s) => s,
  }),
});

export const Exercise3 = () => {
  const [submitted, setSubmitted] = useState<FormValues | null>(null);

  const formik = useFormik<FormValues>({
    initialValues: { name: "", rating: "", message: "" },
    validationSchema: schema,
    onSubmit: (values) => setSubmitted(values),
  });

  return (
    <div className="form">
      <h2>Rating Form</h2>

      <form onSubmit={formik.handleSubmit} className="form__container">
        <div className="form__group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            {...formik.getFieldProps("name")}
            className="form__input"
          />
          {formik.touched.name && formik.errors.name && (
            <div className="form__error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form__group">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Rating:</legend>
            <div className="form__rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <label key={star} className="form__star-label">
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={Number(formik.values.rating) === star}
                    onChange={() => formik.setFieldValue("rating", star)}
                    className="form__star-input"
                  />
                  <span
                    className={`form__star ${
                      Number(formik.values.rating) >= star
                        ? "form__star--active"
                        : ""
                    }`}
                  >
                    ★
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
          {formik.touched.rating && formik.errors.rating && (
            <div className="form__error">{formik.errors.rating}</div>
          )}
        </div>

        <div className="form__group">
          <label htmlFor="message">Feedback:</label>
          <textarea
            id="message"
            {...formik.getFieldProps("message")}
            className="form__input form__input--textarea"
            rows={4}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="form__error">{formik.errors.message}</div>
          )}
        </div>

        <button type="submit" className="form__submit">
          Submit
        </button>
      </form>

      {submitted && (
        <div className="data">
          <h3 className="data__title">Submitted Data:</h3>
          <p className="data__item">
            <strong>Name:</strong> {submitted.name}
          </p>
          <p className="data__item">
            <strong>Rating:</strong> {submitted.rating} stars
          </p>
          <p className="data__item">
            <strong>Feedback:</strong>{" "}
            {submitted.message || "No feedback provided"}
          </p>
        </div>
      )}
    </div>
  );
};
