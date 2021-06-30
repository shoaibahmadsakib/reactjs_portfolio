import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

const SimpleForm = () => <MailchimpSubscribe url={url} />;

const Contact = () => {
  return (
    <div id="contact">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <div>
            <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
            {status === "sending" && (
              <div style={{ color: "blue" }}>sending...</div>
            )}
            {status === "error" && (
              <div
                style={{ color: "red" }}
                dangerouslySetInnerHTML={{ __html: message }}
              />
            )}
            {status === "success" && (
              <div style={{ color: "green" }}>Subscribed !</div>
            )}
          </div>
        )}
      />
    </div>
  );
};

export default Contact;
