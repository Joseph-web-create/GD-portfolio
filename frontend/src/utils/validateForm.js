export const validateName = (name) => {
  const validRegex = /^[A-Za-z\s]+$/;

  if (!name) return "First Name is required.";

  if (!validRegex.test(name)) return "Only letters and spaces are allowed.";

  return null;
};

export const validateSubject = (subject) => {
  const validRegex = /^[A-Za-z\s]+$/;
  if (!subject) return "Subject is required.";
  if (!validRegex.test(subject)) return "Only letters and spaces are allowed.";
  return null;
};

export const validateEmail = (email) => {
  const validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!email) {
    return "Email is required.";
  } else if (!validRegex.test(email)) {
    return "Please enter a valid email address";
  }

  return null;
};
