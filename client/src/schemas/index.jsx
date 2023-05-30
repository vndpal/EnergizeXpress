import * as yup from 'yup';

export const resigterSchema = yup.object({
    firstName:yup.string().required("Please end first name"),
    lname:yup.string().required("Please end last name"),
    mobile:yup.number().required("Please end mobile"),
    emailId:yup.string().email().required("Please end email"),
    password:yup.string().required("Please end password"),
    cpassword:yup.string().required("Please end confirm password"),
})