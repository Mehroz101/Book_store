const validator = (values, formType) => {
    let errors = {};
  
    // Common validation for both sign-in and sign-up
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 5) {
      errors.name = "Name must be at least 5 characters long";
    }
  
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 5) {
      errors.password = "Password must be at least 5 characters long";
    }
  
    // Additional validation for sign-up
    if (formType === "signup") {  
      if (!values.cpassword) {
        errors.cpassword = "Confirm Password is required";
      } else if (values.cpassword !== values.password) {
        errors.cpassword = "Passwords do not match";
      }
    }
  
    return errors;
  };
  
  export default validator;
  