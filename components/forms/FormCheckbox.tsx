'use client';

import { FC } from 'react';
import { Controller, FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FormCheckboxProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  description?: string;
  required?: boolean;
}

export const FormCheckbox: FC<FormCheckboxProps<any>> = ({ name, label, description, required }) => {
  const { control, formState } = useFormContext();
  const error = formState.errors[name];

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id={name}
              checked={field.value || false}
              onCheckedChange={field.onChange}
            />
            <Label htmlFor={name} className="text-sm font-medium text-foreground cursor-pointer">
              {label}
              {required && <span className="text-destructive ml-1">*</span>}
            </Label>
          </div>
          {description && <p className="text-xs text-muted-foreground ml-6">{description}</p>}
          {error && <p className="text-xs text-destructive ml-6">{String(error.message)}</p>}
        </div>
      )}
    />
  );
};
