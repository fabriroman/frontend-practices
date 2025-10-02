import * as yup from "yup";

export const personalInfoSchema = yup.object({
  name: yup
    .string()
    .min(5, "Name must be at least 5 characters")
    .required("Name is required"),
  age: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .min(14, "Minimum age is 14 years")
    .required("Age is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
});

export const addressSchema = yup.object({
  country: yup.string().required("Country is required"),
  city: yup.string().required("City is required"),
  zipCode: yup
    .string()
    .matches(
      /^\d{5}(-\d{4})?$/,
      "Must be a valid zip code (e.g., 12345 or 12345-6789)"
    )
    .required("Zip code is required"),
});

export const preferencesSchema = yup.object({
  contactMethod: yup
    .string()
    .oneOf(
      ["email", "phone", "whatsapp"],
      "Please select a valid contact method"
    )
    .required("Contact method is required"),
  subscribeNewsletter: yup.boolean().required().default(false),
  favoriteCategory: yup
    .string()
    .oneOf(
      ["technology", "health", "art", "travel"],
      "Please select a valid category"
    )
    .required("Favorite category is required"),
});
