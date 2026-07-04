'use client';

import { useCallback, useState } from 'react';
import { useForm as useReactHookForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ZodSchema } from 'zod';

export function useForm(
  schema: ZodSchema,
  onSubmit: (data: any) => Promise<void> | void,
  defaultValues?: any
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useReactHookForm({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues || {},
  });

  const handleSubmit = useCallback(
    async (data: any) => {
      setIsSubmitting(true);
      setSubmitError(null);
      try {
        await onSubmit(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Une erreur s\'est produite';
        setSubmitError(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [onSubmit]
  );

  return {
    ...form,
    handleSubmit: form.handleSubmit(handleSubmit),
    isSubmitting,
    submitError,
  };
}
