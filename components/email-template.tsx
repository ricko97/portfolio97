import React from "react";

interface EmailTemplateProps {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  phone,
  email,
  subject,
  message,
}) => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        border: "1px solid #ddd",
        padding: "20px",
        maxWidth: "600px",
        margin: "20px auto",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2 style={{ color: "#333" }}>Subject: {subject}</h2>
      <p style={{ color: "#555" }}>
        <strong>From:</strong> {name}
      </p>
      <p style={{ color: "#555" }}>
        <strong>Email:</strong> {email}
      </p>
      <p style={{ color: "#555" }}>
        <strong>Phone:</strong> {phone}
      </p>
      <hr />
      <p style={{ color: "#333" }}>{message}</p>
    </div>
  );
};

export default EmailTemplate;
