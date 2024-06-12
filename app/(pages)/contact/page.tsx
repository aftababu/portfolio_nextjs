"use client";
import { useRef, useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "@/app/utils/useAlert";
import Alert from "@/app/components/Alert";
import ContactFooter from "./ContactFooter";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          {
            from_name: form.name,
            to_name: "Mohammad Abu Aftab Wasih",
            from_email: form.email,
            to_email: "aftababu35@gmail.com",
            message: form.message,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(() => {
          setIsLoading(false);
          showAlert({
            text: "Message sent successfully",
            type: "success",
          });
          setTimeout(() => {
            hideAlert();
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 3000);
        })
        .catch(() => {
          setIsLoading(false);
          showAlert({
            text: "Something went wrong",
            type: "danger",
          });
        });
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      showAlert({
        text: "Something went wrong",
        type: "danger",
      });
    }
  };
  return (
    <>
      <section className="max-container" id="contact">
        {alert.show && <Alert {...alert} />}
        <div className="max-w-[80vw] md:max-w-[70vw] lg:max-w-[50vw] flex flex-col mx-auto mb-3">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-7"
          >
            <label className="text-slate-400 font-semibold">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="wasih"
                required
                onChange={handleChange}
                value={form.name}
              />
            </label>
            <label className="text-slate-400 font-semibold">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="something@gmail.com"
                required
                onChange={handleChange}
                value={form.email}
              />
            </label>
            <label className="text-slate-400 font-semibold">
              Message
              <textarea
                name="message"
                rows={4}
                className="textarea"
                placeholder="wasih"
                required
                onChange={handleChange}
                value={form.message}
              />
            </label>
            <button
              type="submit"
              className="btn w-full py-2"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
      <ContactFooter />
    </>
  );
};

export default Contact;
