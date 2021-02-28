import ContactCard from "../components/ContactCard";
export default function Home() {
  return (
    <div className="h-screen bg-white dark:bg-black overscroll-none">
      <div className="flex flex-col items-center items-start">
        <div>
          <p className="text-9xl font-extrabold text-center tracking-lg text-black dark:text-white mb-5 mt-40">
            I'm Andy
          </p>
          <p className="text-xl text-center text-black dark:text-white ">
            Self-taught developer from Malaysia
          </p>
        </div>
        <ContactCard />
      </div>
    </div>
  );
}
