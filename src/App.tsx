import { Header } from "./components/Header.tsx";
import { InfoCard } from "./components/InfoCard.tsx";
import { Checkout } from "./pages/Checkout.tsx";
import { Footer } from "./components/Footer.tsx";

function App() {
  return (
    <div className="w-[450px] h-[95%] rounded-md shadow-xl flex flex-col">
      <Header className="flex justify-between items-center p-5 rounded-t-md" />
      <InfoCard
        className="flex justify-between p-5 items-center bg-neutral-900"
        isMyCart={true}
      />
      <Checkout />
      <Footer
        content="Proceed to the next step"
        className="uppercase p-8 justify-self-end flex justify-center items-center bg-lime-300 rounded-b-md border-t-2 border-neutral-900"
      />
    </div>
  );
}

export default App;
