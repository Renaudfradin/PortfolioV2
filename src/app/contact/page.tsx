import type { Metadata } from "next";
import ContactComponent from "@/components/Contact/Contact";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <div>
      <ContactComponent />
    </div>
  );
}
