import { Plus_Jakarta_Sans, DM_Sans, Yesteryear } from "next/font/google";
import AuthProvider from "@/components/providers/AuthProvider";
import ToasterComponent from "@/components/elements/ToasterComponent";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "/public/assets/css/app.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/jquery.fancybox.min.css";
import "/public/assets/css/textanimation.css";
import "/public/assets/css/auth.css";

const jakarta = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-Jakarta",
  display: "swap",
});
const dM_Sans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});
const yesteryear = Yesteryear({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-Yesteryear",
  display: "swap",
});
export const metadata = {
  title: "Randil Lanka Tours",
  description: "Travel and Tour Services in Sri Lanka",
  keywords: "Randil Lanka Tours, Sri Lanka, Travel, Tour, Adventure, Nature",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <style>
          {`
            .whatsapp-float {
              position: fixed;
              bottom: 100px;
              right: 15px;
              background-color: #25d366;
              color: #fff;
              width: 60px;
              height: 60px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 32px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
              transition: transform 0.3s ease-in-out;
              text-decoration: none;
              z-index: 1000;
            }
            
            .whatsapp-float:hover {
              transform: scale(1.1);
            }
            
            .whatsapp-icon {
              font-size: 32px;
            }
          `}
        </style>{" "}
      </head>{" "}
      <body
        className={`${jakarta.variable} ${dM_Sans.variable} ${yesteryear.variable} body header-fixed`}
      >
        <AuthProvider>
          {children}
          {/* WhatsApp Floating Button */}{" "}
          <a
            href="https://wa.me/94773087631"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp whatsapp-icon"></i>
          </a>
          {/* Toast notifications */}
          <ToasterComponent />
        </AuthProvider>
      </body>
    </html>
  );
}
