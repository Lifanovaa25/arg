'use client';

import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import cn from 'classnames';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormValues } from '@/src/shared/lib/validation/formSchema';

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
import { useReCaptcha } from 'next-recaptcha-v3';
import { useState } from 'react';
import { useCart } from '@/src/app/providers/CartProvider/CartProvider';

export const Order = () => {
  const { totalQuantity, cartItems } = useCart();

  const { executeRecaptcha } = useReCaptcha();
  const [cart, setCart] = useState(cartItems || []);
  const totalCartQuantity = totalQuantity();


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
      const token = await executeRecaptcha('form_submit');
      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        items: cart.map((item: { id: any; quantity: any; }) => ({
          id: item.id,
          quantity: item.quantity,
        })),
        token: token,
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/SubmitCart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке формы');
      }

      reset();
      showToast();
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
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
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <Title className={styles.title} size="h2" variant="secondary">
          Your order
        </Title>
        {totalCartQuantity > 0 &&
          <div className={styles.items}>
            <span className={styles.count}>({totalCartQuantity}</span>
            <span>items)</span>
          </div>
        }
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
            [styles.error]: false,
          })}
        ></div>

        <Button
          className={styles.btn}
          variant="golden"
          isLoading={isSubmitting}
          type="submit"
          aria-label=" Сreate an order"
        >
          Сreate an order
        </Button>
      </form>
    </div>
  );
};
