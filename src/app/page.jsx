import Hero from "@/components/homepage/Hero";

export const metadata = {
    title : "Home | Kin Keeper"
}

const HomePage = () => {
    return (
        <div className="bg-[#F8FAFC]">
            <section>
                <Hero/>
            </section>
        </div>
    );
};

export default HomePage;