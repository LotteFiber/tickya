import { ZodError } from "zod";

export type ActionState = {
  message: string;
  payload?: FormData;
  fieldError: Record<string, string[] | undefined>;
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    // if validation error with Zod, return first error message
    return {
      message: error.errors[0].message,
      payload: formData,
      fieldError: error.flatten().fieldErrors,
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message
    // e.g. database error
    return {
      message: error.message,
      payload: formData,
      fieldError: {},
    };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      message: "An unknown error occured",
      fieldError: {},
      payload: formData,
    };
  }
};
