"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Upload() {
  const [formData, setFormData] = useState({
    intervieweeName: "Governor Scott",
    description:
      "American Governor is asked why on-duty police officers attended his campaign event and whether that is acceptable.",
    youtubeUrl: "https://www.youtube.com/watch?v=fbgnieG9Z4g",
    audioFile: null,
  });

  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      audioFile: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform any necessary form validation here

    // Simulate a file upload (replace this with your actual upload logic)
    // For now, we'll just log the form data
    console.log(formData);

    // Redirect to the home page after successful submission
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-4 space-y-4 bg-white shadow-lg rounded-lg"
      >
        <h2 className="text-2xl font-bold text-gray-800">Upload Video</h2>

        <div className="mb-4">
          <label
            htmlFor="intervieweeName"
            className="block text-sm font-medium text-gray-600"
          >
            Interviewee Name
          </label>
          <input
            type="text"
            id="intervieweeName"
            name="intervieweeName"
            value={formData.intervieweeName}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description of Video
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
            className="w-full px-3 h-36 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="youtubeUrl"
            className="block text-sm font-medium text-gray-600"
          >
            Youtube Video URL
          </label>
          <input
            type="text"
            id="youtubeUrl"
            name="youtubeUrl"
            value={formData.youtubeUrl}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="audioFile"
            className="block text-sm font-medium text-gray-600"
          >
            Audio File (Mono .wav)
          </label>
          <input
            type="file"
            id="audioFile"
            name="audioFile"
            accept=".wav"
            onChange={handleFileChange}
            required
            className="w-full px-3 py-2 mt-1 text-gray-700 border rounded-lg focus:ring focus:ring-blue-200"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 text-black rounded-full"
            style={{
              backgroundColor: "#82ca9d",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
