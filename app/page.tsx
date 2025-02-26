"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
export default function Home() {
  const [topic, setTopic] = useState("");
  const [numSlides, setNumSlides] = useState(5);
  const [layout, setLayout] = useState("Varied");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/slide/generate-presentation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          topic,
          num_slides: numSlides,
          layout,
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "generated_presentation.pptx";
        a.click();
        toast("Presentation generated successfully.");
      } else {
        toast("Failed to generate presentation.");
      }
    } catch (error) {
      console.error(error);
      toast("An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6">AI-Powered PowerPoint Generator</h1>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of slides"
            value={numSlides}
            onChange={(e) => setNumSlides(parseInt(e.target.value))}
            className="w-full p-2 border rounded"
          />
          <select
            value={layout}
            onChange={(e) => setLayout(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="Varied">Varied</option>
            <option value="Text-Heavy">Text-Heavy</option>
            <option value="Image-Focused">Image-Focused</option>
          </select>
          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {loading ? "Generating..." : "Generate Presentation"}
          </Button>
        </div>
      </div>
    </div>
  );
}