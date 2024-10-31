'use client';

import Button from '@/src/shared/ui/Button/Button';
import Checkbox from '@/src/shared/ui/Checkbox/Checkbox';
import Textarea from '@/src/shared/ui/Textarea/Textarea';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import cn from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormValues } from '@/src/shared/lib/validation/formSchema';
import Input from '@/src/shared/ui/Input/Input';
import { showToast } from '@/src/shared/ui/Toast/Toast';
import User from '/public/svg/user.svg';
import Phone from '/public/svg/phone.svg';
import Email from '/public/svg/email.svg';
import Message from '/public/svg/message.svg';
import styles from './Middle.module.scss';
import { IFeedBackResponse200 } from '@/src/app/api/feedback/interfaces';
import { SendVacancyRespond } from '@/src/app/api/feedback/feedbackAPI';
import { useReCaptcha } from 'next-recaptcha-v3';

export const Middle = () => {
  const { executeRecaptcha } = useReCaptcha();
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
      const token = await executeRecaptcha('form_submit');
      const { accept, ...data } = form;
      reset();
      let sendForm = async (): Promise<void> => {
        const result = await SendVacancyRespond({
          name: data.name,
          phone: data.phone,
          email: data.email,
          Itn: null,
          file: null,
          message: data.message,
          token: token,
        });

        if (result) {
          const r: IFeedBackResponse200 = result as IFeedBackResponse200;
          showToast();
        }
      };
      sendForm();
    } catch (error) {
      console.error(error);
    }
  };
  const formFields = [
    {
      name: 'name',
      label: 'Your name',
      placeholder: 'David Augustino',
      error: errors.name?.message,
      Icon: User,
    },
    {
      name: 'phone',
      label: 'Phone number',
      placeholder: '+971 12-345-6789',
      error: errors.phone?.message,
      Icon: Phone,
    },
    {
      name: 'email',
      label: 'Your email',
      placeholder: 'royalequipment@gmail,com',
      error: errors.email?.message,
      Icon: Email,
    },
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrap}>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {formFields.map(({ name, label, placeholder, error, Icon }) => (
              <label
                key={name}
                className={cn(styles.label, {
                  [styles.error]: error,
                })}
              >
                <div className={styles.labelWrapper}>
                  <Icon color="var(--black)" />
                  <span className={styles.span}>{label}</span>
                </div>
                <Input
                  {...register(name as keyof FormValues)}
                  className={styles.input}
                  variant="third"
                  placeholder={placeholder}
                />
              </label>
            ))}

            <label
              className={cn(styles.label, {
                [styles.error]: errors.message?.message,
              })}
            >
              <div className={styles.labelWrapper}>
                <Message color="var(--black)" />
                <span className={styles.span}>Message</span>
              </div>
              <Textarea {...register('message')} placeholder="Typing here" />
            </label>

            <Controller
              name="accept"
              control={control}
              render={({ field }) => (
                <Checkbox
                  className={styles.checkbox}
                  textClassName={styles.checkboxText}
                  variant="secondary"
                  checked={field.value}
                  message={errors.accept?.message}
                  onCheckedChange={field.onChange}
                />
              )}
            />

            <div
              className={cn(styles.recaptchaWrapper, {
                [styles.error]: false,
              })}
            ></div>

            <Button
              className={styles.btn}
              variant="golden"
              isLoading={isSubmitting}
              type="submit"
            >
              Сreate an order
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
