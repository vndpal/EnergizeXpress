import * as yup from 'yup';

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const passRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

export const resigterSchema = yup.object({
    firstName:yup.string().required("Please enter first name"),
    lname:yup.string().required("Please enter last name"),
    mobile:yup.string().matches(phoneRegExp,'Please enter valid phone number').required("Please enter mobile number"),
    emailId:yup.string().email().required("Please emailId email"),
    password:yup.string().matches(
        passRegExp,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ).required("Please enter password"),
    cpassword:yup.string().matches(
        passRegExp,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ).required("Please enter confirm password").oneOf([yup.ref("password"), null],"Passwords must match"),
})