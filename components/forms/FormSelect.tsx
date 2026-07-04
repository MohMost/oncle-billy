'use client';

import { FC, SelectHTMLAttributes } from 'react';
import { Controller, FieldPath, FieldValues, useFormContext } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps<T extends FieldValues> {
  name: FieldPath<T>;
  label: string;
  options: Option[];
  description?: string;
  required?: boolean;
  placeholder?: string;
}

export const FormSelect: FC<FormSelectProps<any>> = ({
  name,
  label,
  options,
  description,
  required,
  placeholder = 'Sélectionnez une option',
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
          <Select value={field.value || ''} onValueChange={field.onChange}>
            <SelectTrigger
              id={name}
              className={`rounded-lg border border-input bg-background px-3 py-2 text-sm ${
                error ? 'border-destructive' : ''
              }`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <p className="text-xs text-muted-foreground">{description}</p>}
          {error && <p className="text-xs text-destructive">{String(error.message)}</p>}
        </div>
      )}
    />
  );
};
