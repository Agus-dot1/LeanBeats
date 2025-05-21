import EmailJs from '@emailjs/browser';

export const EMAIL_SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID || '';
export const EMAIL_TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID || '';
export const EMAIL_PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY || '';

export interface EmailNotificationData {
  [key: string]: unknown;
  email: string;
  subject: string;
  message: string;
}

export const sendEmailNotification = async (data: EmailNotificationData) => {
  if (!EMAIL_SERVICE_ID || !EMAIL_TEMPLATE_ID || !EMAIL_PUBLIC_KEY) {
    throw new Error('Email service configuration is missing');
  }

  try {
    const response = await EmailJs.send(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      data,
      EMAIL_PUBLIC_KEY
    );
    return response;
  } catch (error) {
    console.error('Error sending email notification:', error);
    throw error;
  }
};