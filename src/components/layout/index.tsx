import { Footer } from "./components/footer";
import Header from "./components/header";

interface LayoutProps {
  children: React.ReactNode;
}
export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
