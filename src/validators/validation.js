export const validatePassword = (rule, value, callback) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^a-zA-Z0-9]).*$/;
  if (!passwordRegex.test(value)) {
    callback("Password too easy!");
  } else {
    callback();
  }
};

export const validateMessages = {
  required: "Field is required",
  types: {
    email: "The input is not valid E-mail!",
  },
};

export const required = (rule, value, callback) => {
  const valueIsEmpty = !value;
  const valueIsNotZero = value !== 0;

  if (valueIsEmpty && valueIsNotZero) {
    callback("Field is required");
  } else {
    callback();
  }
};
