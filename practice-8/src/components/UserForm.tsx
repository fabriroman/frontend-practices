import { useRef, useState } from "react";

type Errors = {
  name: string;
  email: string;
  password: string;
};

export const UserForm = () => {
  const refs = {
    nameRef: useRef<HTMLInputElement>(null),
    emailRef: useRef<HTMLInputElement>(null),
    passwordRef: useRef<HTMLInputElement>(null),
  };

  const [errors, setErrors] = useState<Errors>({
    name: "",
    email: "",
    password: "",
  });

  const isEmailValid = (email: string) => {
    return /^[\p{L}\p{N}._%+-]+@[\p{L}\p{N}.-]+\.[\p{L}]{2,}$/u.test(email);
  };

  const validateForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let hasErrors = false;

    setErrors({ name: "", email: "", password: "" });

    if (refs.nameRef.current?.value === "") {
      refs.nameRef.current?.focus();
      setErrors(prev => ({ ...prev, name: "Name is required" }));
      hasErrors = true;
    }
    if (refs.emailRef.current?.value === "") {
      refs.emailRef.current?.focus();
      setErrors(prev => ({ ...prev, email: "Email is required" }));
      hasErrors = true;
    }
    if (refs.emailRef.current?.value && !isEmailValid(refs.emailRef.current.value)) {
      refs.emailRef.current?.focus();
      setErrors(prev => ({ ...prev, email: "Invalid email" }));
      hasErrors = true;
    }
    if (refs.passwordRef.current?.value === "") {
      refs.passwordRef.current?.focus();
      setErrors(prev => ({ ...prev, password: "Password is required" }));
      hasErrors = true;
    }
    if (!hasErrors) {
      alert("Form is valid!");
      if (refs.nameRef.current) {
        refs.nameRef.current.value = "";
      }
      if (refs.emailRef.current) {
        refs.emailRef.current.value = "";
      }
      if (refs.passwordRef.current) {
        refs.passwordRef.current.value = "";
      }
    }
  };

  return (
    <div className="user-form-container">
      <h1>Exercise 3</h1>
      <form className="user-form-form" onSubmit={validateForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            ref={refs.nameRef}
            />
            {errors.name && (
            <small style={{ color: "red" }}>
              {errors.name}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            ref={refs.emailRef}
          />
          {errors.email && (
            <small style={{ color: "red" }}>
              {errors.email}
            </small>
          )}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={refs.passwordRef}
          />
          {errors.password && (
            <small style={{ color: "red" }}>
              {errors.password}
            </small>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
