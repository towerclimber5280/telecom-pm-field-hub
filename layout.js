import "./globals.css";

export const metadata = {
  title: "Telecom PM Field Hub",
  description: "Telecom-oriented construction project management dashboard"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
