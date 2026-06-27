"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FieldLabel, Textarea, TextInput } from "@/components/ui/FormField";
import type { ConversionFormModel, FormFieldModel, FormStatus } from "@/types/forms";

function FieldControl({ field }: { field: FormFieldModel }) {
  const describedBy = field.helperText ? `${field.name}-helper` : undefined;

  if (field.type === "textarea") {
    return (
      <Textarea
        aria-describedby={describedBy}
        id={field.name}
        name={field.name}
        placeholder={field.placeholder}
        required={field.required}
      />
    );
  }

  if (field.type === "select") {
    return (
      <select
        aria-describedby={describedBy}
        className="min-h-12 w-full rounded-field border border-ink/15 bg-white px-4 text-ink shadow-inset transition duration-200 ease-editorial focus:border-moss-700 focus:outline-none focus:ring-4 focus:ring-moss-500/15"
        id={field.name}
        name={field.name}
        required={field.required}
      >
        <option value="">Select an option</option>
        {field.options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <TextInput
      aria-describedby={describedBy}
      id={field.name}
      name={field.name}
      placeholder={field.placeholder}
      required={field.required}
      type={field.type}
    />
  );
}

export function ConversionForm({ form }: { form: ConversionFormModel }) {
  const [status, setStatus] = useState<FormStatus>("idle");
  const statusId = useId();

  return (
    <Card as="section" className="scroll-mt-28" id={form.id}>
      <div className="grid gap-3">
        <h2 className="font-serif text-step-3 font-semibold text-ink">{form.title}</h2>
        <p className="text-step-0 text-ink/70">{form.description}</p>
      </div>
      <form
        aria-describedby={statusId}
        className="mt-8 grid gap-5"
        noValidate={false}
        onSubmit={(event) => {
          event.preventDefault();
          setStatus("error");
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {form.fields.map((field) => (
            <div className={field.type === "textarea" ? "grid gap-2 md:col-span-2" : "grid gap-2"} key={field.name}>
              <FieldLabel
                hint={field.required ? `${field.helperText ?? "Required."}` : field.helperText}
                htmlFor={field.name}
              >
                {field.label}
                {field.required ? <span aria-hidden="true"> *</span> : null}
              </FieldLabel>
              <FieldControl field={field} />
              {field.helperText ? (
                <p className="sr-only" id={`${field.name}-helper`}>
                  {field.helperText}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        <div aria-live="polite" className="rounded-card border border-ink/10 bg-canvas-warm p-4 text-sm text-ink/70" id={statusId}>
          {status === "idle" ? form.integrationNote : null}
          {status === "loading" ? "Preparing request..." : null}
          {status === "success" ? "Request prepared. Connect an endpoint to submit this form." : null}
          {status === "error"
            ? `This frontend is ready, but ${form.endpointKey} is not connected yet. No information was submitted.`
            : null}
        </div>
        <Button aria-disabled={status === "loading"} type="submit">
          {form.submitLabel}
        </Button>
      </form>
    </Card>
  );
}
