import { createError } from 'apollo-errors';

const RegisterError = createError("RegisterError", {
	message: "There was an error with your regstration"
});

export default RegisterError;

