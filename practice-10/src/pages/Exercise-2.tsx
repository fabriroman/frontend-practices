import { useFieldArray, useForm } from "react-hook-form";
import "../exercise-2/styles/Form.css";

const socialMediaPlatforms = [
  { value: "twitter", label: "Twitter" },
  { value: "facebook", label: "Facebook" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "github", label: "GitHub" },
] as const;

type Platform = (typeof socialMediaPlatforms)[number]["value"];

type SocialLink = {
  platform: Platform | "";
  url: string;
};

type FormValues = {
  socialLinks: SocialLink[];
};

export const Exercise2 = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      socialLinks: [{ platform: "", url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "socialLinks",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    alert("Form submitted successfully!");
    reset({ socialLinks: [{ platform: "", url: "" }] });
  };

  const validateUrl = (value: string) => {
    try {
      new URL(value.trim());
      return true;
    } catch {
      return "Invalid URL format";
    }
  };

  return (
    <div className="social">
      <h1 className="social__title">Social Media Links</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="social__form">
        {fields.map((field, index) => (
          <div key={field.id} className="social__field-group">
            <select
              className="social__select"
              defaultValue={field.platform}
              {...register(`socialLinks.${index}.platform`, {
                required: "Please select a platform",
              })}
            >
              <option value="">Select a platform</option>
              {socialMediaPlatforms.map((platform) => (
                <option key={platform.value} value={platform.value}>
                  {platform.label}
                </option>
              ))}
            </select>
            {errors.socialLinks?.[index]?.platform && (
              <div className="social__error">
                {errors.socialLinks[index]?.platform?.message}
              </div>
            )}

            <input
              type="text"
              className="social__input"
              placeholder="https://..."
              defaultValue={field.url}
              {...register(`socialLinks.${index}.url`, {
                required: "URL is required",
                validate: validateUrl,
              })}
            />
            {errors.socialLinks?.[index]?.url && (
              <div className="social__error">
                {errors.socialLinks[index]?.url?.message}
              </div>
            )}

            <button
              type="button"
              className="social__remove"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              Remove
            </button>
          </div>
        ))}

        <div className="social__actions">
          {fields.length < 5 && (
            <button
              type="button"
              className="social__add"
              onClick={() => append({ platform: "", url: "" })}
            >
              Add Social Media
            </button>
          )}

          <button type="submit" className="social__submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
