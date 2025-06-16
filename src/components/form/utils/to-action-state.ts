import { ZodError } from "zod";

export type ActionState = {
  status?: "SUCCESS" | "ERROR";
  message: string;
  payload?: FormData;
  fieldErrors: Record<string, string[] | undefined>;
  timstamp: number;
};

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timstamp: Date.now(),
};

export const fromErrorToActionState = (
  error: unknown,
  formData: FormData
): ActionState => {
  if (error instanceof ZodError) {
    // if validation error with Zod, return first error message
    return {
      status: "ERROR",
      message: error.errors[0].message,
      payload: formData,
      fieldErrors: error.flatten().fieldErrors,
      timstamp: Date.now(),
    };
  } else if (error instanceof Error) {
    // if another error instance, return error message
    // e.g. database error
    return {
      status: "ERROR",
      message: error.message,
      payload: formData,
      fieldErrors: {},
      timstamp: Date.now(),
    };
  } else {
    // if not an error instance but something else crashed
    // return generic error message
    return {
      status: "ERROR",
      message: "An unknown error occured",
      fieldErrors: {},
      payload: formData,
      timstamp: Date.now(),
    };
  }
};

export const toActionState = (
  status: ActionState["status"],
  message: string
): ActionState => {
  return { status, message, fieldErrors: {}, timstamp: Date.now() };
};
