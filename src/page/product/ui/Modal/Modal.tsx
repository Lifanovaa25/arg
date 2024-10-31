'use client';

import { useState, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
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
import Modal from 'react-modal';
import { useBodyOverflow } from '@/src/shared/lib/hooks/useBodyOverflow/useBodyOverflow';
import Close from '/public/svg/close.svg';

import styles from './Modal.module.scss';
import { IFeedBackResponse200 } from '@/src/app/api/feedback/interfaces';
import { sendFeedback } from '@/src/app/api/feedback/feedbackAPI';
import { useReCaptcha } from 'next-recaptcha-v3';

export interface ContactModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}
export const ContactModal = (props: ContactModalProps) => {
  const { executeRecaptcha } = useReCaptcha();
  const { isModalOpen, setIsModalOpen } = props;

  useBodyOverflow(isModalOpen);

  const hadnelCloseModal = () => {
    setIsModalOpen(false);
  };

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
    // if (!captchaToken) {
    //   setCaptchaError(true);
    //   return;
    // }
    try {
      const { accept, ...data } = form;
      const token = await executeRecaptcha('form_submit');
      reset();
      let sendForm = async (): Promise<void> => {
        const result = await sendFeedback({
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
    <Modal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick={true}
      onRequestClose={hadnelCloseModal}
      contentLabel={''}
    >
      <Title className={styles.title} size="h4" variant="secondary">
        Contact with us
      </Title>
      <button onClick={hadnelCloseModal} aria-label="Close">
        <Close width="24" height="24" color="var(--black)" />
      </button>

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

          {/* <div
            className={cn(styles.recaptchaWrapper, {
              [styles.error]: captchaError,
            })}
          >
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LdU9GgqAAAAAAJiU_oxCNnUTR4HkG_0tCuHHlCz"
              onChange={hadleGetToken}
            />
          </div>
   */}
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
    </Modal>
  );
};
