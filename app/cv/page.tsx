import { Metadata } from "next";
import TextContainer from "@/components/TextContainer";

export const metadata: Metadata = {
  title: "CV | Max Afteniy",
  description: "Curriculum Vitae of Max Afteniy",
};

export default function CVPage() {
  return (
    <div className="container py-2 m-0">
      <TextContainer className="p-0 rounded-lg overflow-hidden">
        <div className="min-h-[2250px]">
          <iframe
            src="/cv.pdf"
            className="w-full min-h-[2250px] rounded-none"
            style={{ height: "100%", display: "block" }}
            title="CV"
          ></iframe>
        </div>
      </TextContainer>
    </div>
  );
} 