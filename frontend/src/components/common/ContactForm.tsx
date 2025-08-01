import { useForm } from 'react-hook-form';
import Text from './Text';
import Button from './Button';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-20">
      <form className="space-y-4 dark:text-custom-white" onSubmit={handleSubmit((data) => console.log(data))}>
        <Text variant="h2" size="2xl" className="sm:xl dark:text-custom-white">
          Contact Form
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              aria-label="First Name"
              {...register('firstName', { required: 'First name is required' })}
              className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                {errors.firstName?.message as string}
              </p>
            )}
          </div>
          <div>
            <input
              id="lastName"
              placeholder="Last Name"
              aria-label="Last Name"
              {...register('lastName', { required: 'Last name is required' })}
              className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1" role="alert">
                Last name is required.
              </p>
            )}
          </div>
        </div>

        <div>
          <input
            id="email"
            type="email"
            placeholder="Email"
            aria-label="Email address"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: 'Invalid email address',
              },
            })}
            className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1" role='alert'>{errors.email.message as string}</p>
          )}
        </div>

        <div>
          <textarea
            id="message"
            placeholder="What can we help you with?"
            aria-label="Message"
            {...register('message', { required: 'Message is required' })}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-800"
            rows={4}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1" role='alert'>
              {errors.message.message as string}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary">Send Message</Button>
      </form>
    </div>
  );
}

export default ContactForm;
