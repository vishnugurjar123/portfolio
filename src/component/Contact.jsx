import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../axios/axios";

const Contact = () => {
  // const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Fake loader for toast.promise
  const saveUserAsync = (user) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve("saved"), 2000);
    });
  };

  // ---------------------------------------------------
  // 1️⃣  AXIOS POST SUBMIT (Your Backend)
  // ---------------------------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    let payload = { ...formData };

    try {
      let res = await api.post("/user", payload);
      console.log(res);

      if (res.status === 201) {
        await toast.promise(saveUserAsync(res), {
          loading: "Sending...",
          success: "Send successful! ✋",
          error: "Something went wrong!",
        });
      }

      // Reset form
      setFormData({ name: "", email: "", date: "", message: "" });

    } catch (err) {
      toast.error("Registration Failed ❌");
    }
  };

  // ---------------------------------------------------
  // 2️⃣  FORMSPREE SUBMIT
  // ---------------------------------------------------
  const handleFormspree = async () => {
    

    try {
      const response = await fetch("https://formspree.io/f/myzolvwb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
       await toast.promise(
      saveUserAsync(),
      {
        loading: "Message Sending...",
        success: "Message successful!",
        error: "Something went wrong!",
      }
    );
        

        // Reset form
        setFormData({ name: "", email: "", date: "", message: "" });

      } else {
       
        toast.error("Error sending via Formspree ❌");
      }

    } catch (err) {
     console.log(err);
     
      toast.error("Forms Error ❌");
    }
  };

  return (
    <div className="w-full flex justify-center py-10 px-4">
      <div className="w-full max-w-lg bg-white shadow-xl rounded-2xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              rows="4"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Submit Buttons */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send message
          </button>

          <button
            type="button"
            onClick={handleFormspree}
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Send  Gmail
          </button>

        </form>

        
      </div>
    </div>
  );
};

export default Contact;
