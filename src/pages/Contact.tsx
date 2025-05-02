import { ContactForm } from "../components/ContactForm";
import { BackButton } from "../components/BackButton";

export function Contact() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BackButton />
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any inquiries
          </p>
        </div>
        {/* Rest of the component remains the same */}
      </div>
    </div>
  );
}
