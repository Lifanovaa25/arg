import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/src/shared/ui/Button/Button';
import Input from '@/src/shared/ui/Input/Input';
import Checkbox from '@/src/shared/ui/Checkbox/Checkbox';
import { showToast } from '@/src/shared/ui/Toast/Toast';
import { FormSchema, FormValues } from '@/src/shared/lib/validation/formSchema';
import styles from './Form.module.scss';
import { IFeedBackResponse200 } from '@/src/app/api/feedback/interfaces';
import { sendFeedback } from '@/src/app/api/feedback/feedbackAPI';

export const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
      phone: '',
      accept: false,
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (form) => {
    try {
      const { accept, ...data } = form;
      // const response = await FooterService.sendForm(data);
      reset();
      let sendForm = async (): Promise<void> => {
        const result = await sendFeedback({
          name: data.name,
          phone: data.phone,
          email: data.email,
          Itn: null,
          file: null,
          message: data.message
        });

        if (result) {
          const r: IFeedBackResponse200 = result as IFeedBackResponse200;
          showToast();
        }

      };
      sendForm()

    } catch (error) {
      console.error(error);
    }
  };

  const formFields = [
    {
      name: 'name',
      label: 'NAME',
      placeholder: 'Your name',
      error: errors.name?.message,
    },
    {
      name: 'email',
      label: 'E-MAIL',
      placeholder: 'Your email',
      error: errors.email?.message,
    },
    {
      name: 'message',
      label: 'MESSAGE',
      placeholder: 'Typing here',
      error: errors.message?.message,
    },
    {
      name: 'phone',
      label: 'PHONE NUMBER',
      placeholder: '8 909 124 54 32',
      error: errors.phone?.message,
    },
  ];

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, label, placeholder, error }) => (
        <label key={name} className={styles.label}>
          <span className={styles.span}>{label}</span>
          <Input
            className={styles.input}
            message={error}
            placeholder={placeholder}
            {...register(name as keyof FormValues)}
          />
        </label>
      ))}

      <Button
        className={styles.btn}
        variant="secondary"
        isLoading={isSubmitting}
        type="submit"
      >
        Submit a request
      </Button>
      <Controller
        name="accept"
        control={control}
        render={({ field }) => (
          <Checkbox
            className={styles.checkbox}
            checked={field.value}
            message={errors.accept?.message}
            onCheckedChange={field.onChange}
          />
        )}
      />
    </form>
  );
};
export default Form;
