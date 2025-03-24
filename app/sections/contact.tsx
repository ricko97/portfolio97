import React from "react";
import { Button, Card, Divider, Image, Textarea } from "@heroui/react";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosSend } from "react-icons/io";
import { addToast } from "@heroui/toast";

import { siteConfig } from "@/config/site";
import { title } from "@/components/primitives";
import { validateEmail, validatePhoneNumber } from "@/config/utils";

export default function Contact() {
  const [errors, setErrors] = React.useState({});
  const validationErr = {};
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    if (data.email.length < 1) {
      validationErr["email"] = "Email is required";
    } else if (!validateEmail(data.email as string) || !data.email) {
      validationErr["email"] = "Enter a valid email address";
    }

    if (data.name.length < 1) {
      validationErr["name"] = "Name is required";
    } else if (data.name.length < 3) {
      validationErr["name"] = "Name must be at least 3 characters long";
    }

    if (data.phone && !validatePhoneNumber(data.phone as string)) {
      validationErr["phone"] = "Enter a valid phone number";
    }

    if (data.subject.length < 1) {
      validationErr["subject"] = "Subject is required";
    } else if (data.subject.length < 10) {
      validationErr["subject"] = "Subject must be at least 10 characters long";
    }

    if (data.message.length < 1) {
      validationErr["message"] = "Message is required";
    } else if (data.message.length < 20) {
      validationErr["message"] = "Message must be at least 20 characters long";
    }

    if (Object.keys(validationErr).length > 0) {
      setErrors(validationErr);

      return;
    } else {
      try {
        const res = await fetch("/api/send", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });

        const resBody = await res.json();

        if (res.status === 200) {
          addToast({
            title: "Thank you",
            description: "Your message has been successfully sent.",
            color: "success",
          });
          e.currentTarget.reset();
        } else {
          addToast({
            title: "Sorry",
            description: resBody["message"],
            color: "danger",
          });
        }
      } catch (error) {
        addToast({
          title: "Sorry",
          description: "An error occurred, please try again later.",
          color: "danger",
        });
      }
    }
  };

  return (
    <section className="px-4" id="contact">
      <Divider className={"justify-center"} orientation={"horizontal"} />
      <div className={"my-10 text-center"}>
        <h1 className={title({ color: "blue" })}>Contact</h1>
        <p className={"text-gray-700 dark:text-white"}>Get in touch</p>
      </div>
      <div
        className={
          "my-10 grid lg:grid-cols-3 max-lg:gap-8 max-lg:grid-rows-1 w-full lg:gap-16"
        }
      >
        <Card
          className={"flex flex-col items-center p-8 gap-8 lg:col-span-1"}
          shadow={"md"}
        >
          <Image
            alt={"Rick Lionel Onana"}
            className="rounded-full shadow-inner-xl self-start"
            height="auto"
            src={"/img/me.jpeg"}
            width={150}
          />
          <div className={"flex flex-col self-start"}>
            <span className={"text-2xl font-extrabold"}>{siteConfig.name}</span>
            <span className={"text-sm text-default-700"}>
              {siteConfig.description}
            </span>
          </div>
          <p className={"text-default-500"}>{siteConfig.summary}</p>
          <div className={"flex flex-col self-start text-default-500 gap-3"}>
            <div className={"flex items-center gap-4"}>
              <FaPhone size={24} />
              <span className={"text-sm"}>{siteConfig.contact.phone}</span>
            </div>
            <div className={"flex items-center gap-4"}>
              <MdEmail size={24} />
              <span className={"text-sm"}>{siteConfig.contact.email}</span>
            </div>
            <div className={"flex items-center gap-4"}>
              <FaLocationDot size={24} />
              <span className={"text-sm"}>{siteConfig.contact.location}</span>
            </div>
          </div>
        </Card>
        <Card className={"lg:col-span-2 p-8 w-full"}>
          <Form
            className="w-full flex flex-col gap-8"
            validationErrors={errors}
            onSubmit={onSubmit}
          >
            <div className="flex gap-4 w-full">
              <Input
                isRequired
                aria-label="Your name"
                className="w-full"
                description=""
                label="Name"
                name="name"
                type="text"
              />
              <Input
                aria-label="Phone number"
                className="w-full"
                description="Include your country code (e.g., +1 XXXXXXXX)"
                label="Phone Number"
                name="phone"
                type="tel"
              />
            </div>

            <Input
              isRequired
              aria-label="Email address"
              className="w-full"
              label="Email"
              name="email"
              type="email"
            />

            <Input
              isRequired
              aria-label="Subject"
              className="w-full"
              description=""
              label="Subject"
              name="subject"
              type="text"
            />

            <Textarea
              isClearable
              isRequired
              aria-label="Message"
              className="w-full"
              label="Message"
              name="message"
              // eslint-disable-next-line no-console
              onClear={() => console.log("textarea cleared")}
            />
            <Button
              className={"w-full"}
              color="primary"
              startContent={<IoIosSend />}
              type="submit"
              variant={"bordered"}
            >
              Send Message
            </Button>
          </Form>
        </Card>
      </div>
    </section>
  );
}
