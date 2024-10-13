'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import cn from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormValues } from '@/src/shared/lib/validation/formSchema';
import { productCartStore } from '@/src/app/providers/Store/config/store';
import { getTotalQuantityCards } from '@/src/shared/lib/utils/getTotalQuantityCards/getTotalQuantityCards';
import Title from '@/src/shared/ui/Title/Title';
import Button from '@/src/shared/ui/Button/Button';
import Input from '@/src/shared/ui/Input/Input';
import Checkbox from '@/src/shared/ui/Checkbox/Checkbox';
import Textarea from '@/src/shared/ui/Textarea/Textarea';
import { showToast } from '@/src/shared/ui/Toast/Toast';
import User from '/public/svg/user.svg';
import Phone from '/public/svg/phone.svg';
import Email from '/public/svg/email.svg';
import Message from '/public/svg/message.svg';
import styles from './Order.module.scss';

export const Order = () => {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const { cart } = productCartStore();

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
    if (!captchaToken) {
      setCaptchaError(true);
      return;
    }

    try {
      const { accept, ...data } = form;
  

    reset();
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
      setCaptchaError(false);
      showToast();
    } catch (error) {
      console.error(error);
    }
  };

  const hadleGetToken = (e: string | null) => {
    setCaptchaToken(e);
    setCaptchaError(false);
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
      placeholder: '8 909 124 54 32',
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
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Title className={styles.title} size="h2" variant="secondary">
          Your order
        </Title>
        <div className={styles.items}>
          <span className={styles.count}>({getTotalQuantityCards(cart)}</span>
          <span>items)</span>
        </div>
      </div>

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
            [styles.error]: captchaError,
          })}
        >
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcOFzgqAAAAAAEVXi3ynRYrG4GXP-lNUybfOnWm"
            onChange={hadleGetToken}
          />
        </div>

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
  );
};
