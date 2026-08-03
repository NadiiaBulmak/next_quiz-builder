import { LoginFormState } from "@/schemas/login.schema";
import { FormState } from "@/schemas/sign-up.schema";

export const initialState: FormState = {
    errors: undefined,
    user: undefined
};

export const loginInitialState: LoginFormState = {
    errors: undefined,
    user: undefined
};