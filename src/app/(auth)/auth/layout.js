import "../../globals.css";
import { Poppins } from "next/font/google";
import { ReduxProvider } from "@/redux/provider";

const poppins = Poppins({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ReduxProvider>
          <div className="wrapperDiv">{children}</div>
        </ReduxProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Food Ordering App - Sign In",
};
