// Components
import Header from "./components/header";
import Hero from "./components/hero";
import SubHeader from "./components/subheader";

const Page = () => {
    return (
        <>
            <Header />
            <main>
                <SubHeader />
                <Hero />
            </main>
        </>
    )
}

export default Page;