import { useFieldArray, useForm } from "react-hook-form";

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
    <div>
      <h1>Social Media Links</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field, index) => (
          <div key={field.id}>
            <select
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
              <p>{errors.socialLinks[index]?.platform?.message}</p>
            )}

            <input
              type="text"
              placeholder="https://..."
              defaultValue={field.url}
              {...register(`socialLinks.${index}.url`, {
                required: "URL is required",
                validate: validateUrl,
              })}
            />
            {errors.socialLinks?.[index]?.url && (
              <p>{errors.socialLinks[index]?.url?.message}</p>
            )}

            <button
              type="button"
              onClick={() => remove(index)}
              disabled={fields.length === 1}
            >
              Remove
            </button>
          </div>
        ))}

        {fields.length < 5 && (
          <button
            type="button"
            onClick={() => append({ platform: "", url: "" })}
          >
            Add Social Media
          </button>
        )}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};
