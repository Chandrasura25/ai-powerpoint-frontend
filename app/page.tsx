"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";


export default function Home() {
  const [topic, setTopic] = useState("");
  const [numSlides, setNumSlides] = useState(5);
  const [layout, setLayout] = useState("Varied");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (numSlides < 5 || numSlides > 20) {
      toast("Number of slides must be between 5 and 20.");
      return;
    }

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
        a.download = `${topic}.pptx`;
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleGenerate();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-fit">
        <h1 className="text-xl font-semibold uppercase text-center mb-6">AI-Powered PowerPoint Generator</h1>
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full p-2 border rounded shadow-none"
          />
          <Input
            type="number"
            placeholder="Number of slides"
            value={numSlides}
            onChange={(e) => setNumSlides(parseInt(e.target.value))}
            onKeyDown={handleKeyPress}
            className="w-full p-2 border rounded shadow-none"
          />
          <Select
            defaultValue="Varied"
            onValueChange={(value) => setLayout(value)}
          >
            <SelectTrigger className="w-full p-2 border rounded shadow-none">
              <SelectValue placeholder="Select layout" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Varied">Varied</SelectItem>
              <SelectItem value="Text-Heavy">Text-Heavy</SelectItem>
              <SelectItem value="Image-Focused">Image-Focused</SelectItem>
            </SelectContent>
          </Select>
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