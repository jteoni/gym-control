import Link from "next/link";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Gym Control <span className="text-accent">.</span>
                    </h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
