import Link from "next/link";

const Header = () => {
    return (
        <header className="py-5 xl:py-5 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/*Logo*/}
                <Link href="/">
                    <h2 className="text-4xl font-semibold">
                        Gym Control <span className="text-accent">.</span>
                    </h2>
                </Link>
            </div>
        </header>
    );
};

export default Header;
