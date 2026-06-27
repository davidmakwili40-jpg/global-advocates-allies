import { ConversionForm } from "@/components/forms/ConversionForm";
import { conversionForms } from "@/data/conversion-forms";

export function NewsletterSignup() {
  return <ConversionForm form={conversionForms.newsletter} />;
}
