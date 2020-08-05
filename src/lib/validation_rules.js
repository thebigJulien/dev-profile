import * as Yup from 'yup'

const loginSchema = Yup.object({
  firstName: Yup.string().required("We need your first name"),
  lastName: Yup.string().required("We need your last name").min(2, "Min 2 chars"),
  email: Yup.string().required("Email required").email("Wrong Format"),
  password: Yup.string().required("Password required").min(3, "Min 3 chars").max(5, "Max 5 chars"),
})

export default loginSchema