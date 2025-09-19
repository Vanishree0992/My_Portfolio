import { useForm } from "react-hook-form";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset(); // clear form after submission
  };

  return (
    <section className="bg-nude py-12 px-6">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl font-fancy text-wood mb-6 text-center">
          Contact Me
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            {...register("user_name", { required: "Name is required" })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.user_name && (
            <p className="text-red-500 text-sm">{errors.user_name.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            {...register("user_email", {
              required: "Email is required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Invalid email format",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          {errors.user_email && (
            <p className="text-red-500 text-sm">{errors.user_email.message}</p>
          )}

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            {...register("message", {
              required: "Message cannot be empty",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-honey text-white py-3 rounded-lg font-semibold hover:bg-wood transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
