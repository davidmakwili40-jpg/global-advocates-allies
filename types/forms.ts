export type FieldType = "text" | "email" | "tel" | "textarea" | "select";

export type FormFieldModel = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  helperText?: string;
  placeholder?: string;
  options?: {
    label: string;
    value: string;
  }[];
};

export type ConversionFormModel = {
  id: string;
  title: string;
  description: string;
  submitLabel: string;
  endpointKey: string;
  fields: FormFieldModel[];
  integrationNote: string;
};

export type FormStatus = "idle" | "loading" | "success" | "error";
