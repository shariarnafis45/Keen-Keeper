import Friends from "@/components/homepage/Friends";
import Hero from "@/components/homepage/Hero";

export const metadata = {
  title: "Home | Kin Keeper",
};

const HomePage = async () => {
  const res = await fetch("https://keen-keeper-nafix.vercel.app/friendsData.json");
  const friendsdata = await res.json();
  
  return (
    <div className="bg-[#F8FAFC]">
      <section>
        <Hero friendsdata={friendsdata}/>
      </section>
      <section>
        <Friends friendsdata={friendsdata}/>
      </section>
    </div>
  );
};

export default HomePage;
