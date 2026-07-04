'use client';

import { FC, InputHTMLAttributes } from 'react';
import { Controller, FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface FormInputProps<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  name: FieldPath<T>;
  label: string;
  description?: string;
  required?: boolean;
}

export const FormInput: FC<FormInputProps<any>> = ({
  name,
  label,
  description,
  required,
  ...props
}) => {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-2">
          <Label htmlFor={name} className="text-sm font-medium text-foreground">
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </Label>
          <Input
            id={name}
            {...field}
            {...props}
            className={`rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
              error ? 'border-destructive' : ''
            }`}
          />
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
          {error && <p className="text-xs text-destructive">{String(error.message)}</p>}
        </div>
      )}
    />
  );
};
