import { Roboto } from 'next/font/google'
import "../globals.css";
import Header from "../Conponents/Utils/Header";
import Footer from '../Conponents/Utils/Footer';


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const metadata = {
  title: "Get Money",
  description: "Get Money Website for small task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={roboto.className}>
        <Header />
         <div className=' min-h-[85vh] bg-transparent dark:bg-slate-800'>
         {children}
         </div>
        <Footer />
      </body>
    </html>
  );
}
