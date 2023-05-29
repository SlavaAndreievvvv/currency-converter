import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Converter",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
