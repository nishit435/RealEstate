import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [selectedService, setSelectedService] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "eb7bde19-9716-4a55-8d4b-78f83225b07b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
      setSelectedService("");
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="relative z-10 bg-white text-center pt-45 mt-8 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Enquire to{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Develop
        </span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Ready to make a move? Let's build your future Together!
      </p>

      <form
        onSubmit={onSubmit}
        className="max-w-3xl mx-auto text-left bg-gray-50 p-8 rounded-lg shadow-lg"
      >
        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <InputField
            name="contact_person"
            label="Contact Person Name *"
            required
          />
          <InputField name="company_name" label="Company Name" />
          <InputField name="mail_id" label="Mail ID *" type="email" required />
          <InputField name="phone" label="Phone Number *" type="tel" required />
        </div>

        {/* Service Selection */}
        <div className="mt-8">
          <label className="block text-sm font-semibold mb-2">
            Select a Service
          </label>
          <div className="flex flex-col sm:flex-row gap-4">
            {["Soil Excavation", "Soil Filling", "Machinery Rental"].map(
              (service) => (
                <label
                  key={service}
                  className="flex items-center gap-2 text-sm"
                >
                  <input
                    type="radio"
                    name="service"
                    value={service}
                    required
                    checked={selectedService === service}
                    onChange={() => setSelectedService(service)}
                  />
                  {service}
                </label>
              )
            )}
          </div>
        </div>

        {/* Conditional Fields */}
        <div className="mt-6 space-y-4">
          {selectedService === "Soil Excavation" && (
            <>
              <InputField name="excavation_location" label="Location of Site" />
              <InputField
                name="excavation_volume"
                label="Excavation Volume (cu. m)"
                type="number"
              />
              <InputField
                name="excavation_deadline"
                label="Deadline to Complete Work"
                type="date"
              />
            </>
          )}

          {selectedService === "Soil Filling" && (
            <>
              <InputField name="borrow_location" label="Borrow Location" />
              <InputField name="dumping_location" label="Dumping Location" />
              <InputField
                name="distance_km"
                label="Distance Between Locations (km)"
                type="number"
              />
              <InputField
                name="filling_volume"
                label="Volume to Be Filled (cu. m)"
                type="number"
              />
            </>
          )}

          {selectedService === "Machinery Rental" && (
            <>
              <p className="text-sm text-gray-700 font-medium mb-2">
                * Operator will be provided for Excavators and Tippers.
              </p>
              <InputField
                name="rental_date_from"
                label="Date From"
                type="date"
              />
              <InputField name="rental_date_to" label="Date To" type="date" />
              <InputField
                name="number_of_tippers"
                label="Number of Tippers"
                type="number"
              />
              <SelectField
                name="tipper_type"
                label="Tipper Type"
                options={[
                  { value: "", label: "Select Tipper" },
                  {
                    value: "16_cu_tata_10",
                    label: "16 cu. mt. (Tata 10-tyre tipper)",
                  },
                  {
                    value: "23_cu_tata_12",
                    label: "23 cu. mt. (Tata 12-tyre tipper)",
                  },
                ]}
              />
              <InputField
                name="number_of_excavators"
                label="Number of Excavators"
                type="number"
              />
              <SelectField
                name="excavator_type"
                label="Excavator Type"
                options={[
                  { value: "", label: "Select Excavator" },
                  { value: "ec140d", label: "Volvo EC140D" },
                  { value: "ec220d", label: "Volvo EC220D" },
                ]}
              />
              <SelectField
                name="backhoe_loader"
                label="Do You Need a Backhoe Loader (JCB)?"
                options={[
                  { value: "", label: "Select Option" },
                  { value: "yes", label: "Yes (JCB)" },
                  { value: "no", label: "No" },
                ]}
              />
            </>
          )}
        </div>

        {/* Message */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-semibold mb-1">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-300 rounded py-3 px-4 h-32 resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center mt-8">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-10 py-3 rounded font-semibold"
          >
            {result || "Send Message"}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

// Input helper
const InputField = ({ name, label, type = "text", required = false }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold mb-1">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      required={required}
      className="w-full border border-gray-300 rounded py-2 px-4"
    />
  </div>
);

// Select helper
const SelectField = ({ name, label, options }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold mb-1">
      {label}
    </label>
    <select
      name={name}
      id={name}
      className="w-full border border-gray-300 rounded py-2 px-4"
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default Contact;
