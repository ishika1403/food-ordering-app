import "./globals.css";
import { Poppins } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="wrapperDiv">
          <ReduxProvider>{children}</ReduxProvider>
        </div>
      </body>
    </html>
  );
}
