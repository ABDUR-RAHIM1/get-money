import { Roboto } from 'next/font/google'
import "../globals.css";
import Header from "../Conponents/Utils/Header";
import Footer from '../Conponents/Utils/Footer';
import HomeContextProvider from '../ContextApi/HomeContext';


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
        <HomeContextProvider>
          <Header />
          <div className=' min-h-[85vh] bg-transparent dark:bg-slate-800 overflow-hidden'>
            {children}
          </div>
          <Footer />
        </HomeContextProvider>
      </body>
    </html>
  );
}
