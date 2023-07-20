import React, { useState } from "react";
// import colors from "../../constants/colors";
import AWS from "aws-sdk";
AWS.config.update({
  accessKeyId: process.env.REACT_APP_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_SECRET_ACCESS_KEY,
  region: process.env.REACT_APP_REGION,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  // const [formMessageColor, setFormMessageColor] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      Destination: {
        ToAddresses: ["u7amaaslam@gmail.com"],
      },
      Message: {
        Body: {
          Html: {
            Data: `
              <h6>${name}</h6>
              <p>Phone: ${phone}</p>
              <p>Email: ${email}</p>
              <p>${message}</p>
            `,
          },
        },
        Subject: {
          Data: "Contact Form Submission from Trading Website",
        },
      },
      Source: `${name} <${email}>`,
      ReplyToAddresses: [email],
    };
    setIsLoading(true);
    try {
      const result = await ses.sendEmail(params).promise();
      if (result?.MessageId) {
        setFormMessage(
          `Message successfully sent. Thank you ${name}!`
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        // setFormMessageColor(colors.blue);
        setIsLoading(false);
      } else {
        setFormMessage(
          "There was an error sending your message. Please try again."
        );
        // setFormMessageColor(colors.red);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setFormMessage(
        "An error occurred while sending your message. Please try again later."
      );
      // setFormMessageColor(colors.red);
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="bg-gray-100 w-full min-h-screen p-2 flex items-center">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have any questions or would like to schedule a consultation with one of our trading experts, please don't hesitate to contact us
            </p>
            <ul className="text-lg text-gray-700">
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                Main Road Nowshera Virkan District Gujranwala 52370
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                +923207992944
              </li>
              <li className="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-amber-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s8-4.5 8-11.8c0-4.1-2.3-7.6-5.5-9.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22s-8-4.5-8-11.8c0-4.1 2.3-7.6 5.5-9.4" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                info@changrubatrading.com
              </li>
            </ul>
          </div>
          <div className="mt-12 sm:mt-16 md:mt-0">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    autoComplete="given-name"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
                  Phone
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    autoComplete="tel"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">
                  Message
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    onChange={(e) => setMessage(e.target.value)}
                    className="py-3 px-4 block w-full shadow-sm focus:ring-amber-800 focus:border-amber-800 border border-amber-800 rounded-md"
                  ></textarea>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-lg font-medium rounded-md text-white bg-amber-800 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-800"
                  disabled={isLoading}
                >
                  {!isLoading ? "Send Message" : "Sending..."}
                </button>
              </div>
              {formMessage && (
                <div className="text-center">
                  <p
                    // style={{ color: formMessageColor }}
                    className="text-lg font-medium"
                  >
                    {formMessage}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
