import { useForm } from "react-hook-form";
import {
  validateEmail,
  validateMessage,
  validateName,
  validateSubject,
} from "../utils/validateForm";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const submitFomr = async (data) => {
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      reset(), toast("Email sent! You'll hear back shortly");
    } catch (err) {
      const message = err.text || err.message || "Something went wrong";
      return toast(`FAILED: ${message}`);
    }
  };

  return (
    <div className="mx-w-[600px] px-2">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit(submitFomr)}>
        <div className="flex flex-col gap-4">
          <label htmlFor="name" className="text-[#C7C7C7] text-[16px]">
            Name
          </label>
          <input
            type="text"
            className="bg-[#1A1A1A] text-[#FFFFFF] lg:w-[420px] h-[51px] px-2 rounded-[4px] focus:border focus:border-[#BDD166] outline-none"
            id="name"
            placeholder="e.g, John Doe"
            {...register("name", { validate: (name) => validateName(name) })}
          />

          {errors.name && (
            <span className="text-xs text-red-600">{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="text-[#C7C7C7] text-[16px]">
            Email
          </label>
          <input
            type="email"
            className="bg-[#1A1A1A] text-[#FFFFFF] lg:w-[420px] h-[51px] px-2 rounded-[4px] focus:border focus:border-[#BDD166] outline-none"
            id="email"
            placeholder="e.g, JohnDoe@gmail.com"
            {...register("email", {
              validate: (email) => validateEmail(email),
            })}
          />

          {errors.email && (
            <span className="text-xs text-red-600">{errors.email.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="subject" className="text-[#C7C7C7] text-[16px]">
            Subject
          </label>
          <input
            type="text"
            className="bg-[#1A1A1A] text-[#FFFFFF] lg:w-[420px] h-[51px] px-2 rounded-[4px] focus:border focus:border-[#BDD166] outline-none"
            id="subject"
            placeholder="e.g, Let's Work Together"
            {...register("subject", {
              validate: (subject) => validateSubject(subject),
            })}
          />
          {errors.subject && (
            <span className="text-xs text-red-600">
              {errors.subject.message}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="message" className="text-[#C7C7C7] text-[16px]">
            Message
          </label>

          <textarea
            className="bg-[#1A1A1A] text-[#FFFFFF] lg:w-[420px]  px-2 py-1 rounded-[4px] focus:border focus:border-[#BDD166] outline-none h-[156px] max-h-[300px]"
            id="message"
            placeholder="e.g, Hi, I’d love to work with you on a project. Here are the details..."
            {...register("message", {
              validate: (message) => validateMessage(message),
            })}
          />
          {errors.message && (
            <span className="text-xs text-red-600">
              {errors.message.message}
            </span>
          )}
        </div>

        <button
          className={`w-[140px] h-[54px] rounded-full text-black 
    ${
      isSubmitting
        ? "bg-gray-500 cursor-not-allowed hover:bg-gray-400"
        : "bg-[#D3E97A] hover:bg-[#BDD166] cursor-pointer"
    }`}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="loading loading-spinner loading-md text-[#BDD166]"></span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
}

export default Form;
