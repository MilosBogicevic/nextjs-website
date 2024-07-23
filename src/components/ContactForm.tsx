import SectionHeading from "./SectionHeading";

export default function ContactForm() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <SectionHeading title="Contact Us" />
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-[800px]">
          <p className="mb-12 text-center text-gray-500 sm:text-xl">
            Not sure exactly what you need? Do you need advice or an analysis of
            your business to decide which solution is best for you? Feel free to
            contact us to make an appointment and clear all your doubts.
          </p>
          <form action="#" className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-2">
              <label htmlFor="email" className="flex w-full">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="flex p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus-visible:outline-primary-light"
                placeholder="name@email.com"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label htmlFor="subject" className="flex w-full">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="flex p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus-visible:outline-primary-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="message"
                className="flex w-full dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="flex p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus-visible:outline-primary-light"
                placeholder="Leave a message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex justify-center max-w-[200px] w-full py-3 px-5 text-center text-secondary rounded-lg bg-primary hover:bg-primary-light"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
