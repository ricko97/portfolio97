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

export default function Contact() {
  const [errors] = React.useState({});
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      //const resBody = await res.json();

      if (res.status === 200) {
        addToast({
          title: "Thank you",
          description: "Your message has been successfully sent.",
          color: "success",
        });
        e.target.reset();
      } else {
        addToast({
          title: "Sorry",
          description: "An error occurred, please try again later.",
          color: "danger",
        });
      }
    } catch (error) {}
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
            <div className="flex max-sm:flex-col gap-4 max-sm:gap-8 w-full">
              <Input
                isRequired
                aria-label="Your name"
                className="w-full"
                description=""
                label="Name"
                minLength={3}
                name="name"
                type="text"
              />
              <Input
                aria-label="Phone number"
                className="w-full"
                description="Include your country code (e.g., +1 XXXXXXXX)"
                errorMessage="Please enter a valid phone number with country code."
                label="Phone Number"
                name="phone"
                pattern="^\+\d{1,4}\s\d{6,15}$"
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
              minLength={10}
              name="subject"
              type="text"
            />

            <Textarea
              isClearable
              isRequired
              aria-label="Message"
              className="w-full"
              label="Message"
              minLength={20}
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
