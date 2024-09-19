// Import Components
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const NotFound = () => {
    return (
        <main>
            <Header />
            <section>
                <div className="__homeHeroGradientBg h-[250px] flex items-center text-center">
                    <div className="container">
                        <h1 className="text-4xl sm:text-5xl xl:text-5xl 2xl:text-6xl font-megat text-white font-normal leading-none mt-10">404 - Page Not Found</h1>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    );
}

export default NotFound;