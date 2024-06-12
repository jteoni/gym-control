"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "members",
        path: "/members",
    },
    {
        name: "teachers",
        path: "/teachers",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col pt-10 px-5">
            <div className="items-center">
                <Link href="/">
                    <h2 className="text-4xl font-semibold">
                        Gym Control <span className="text-accent">.</span>
                    </h2>
                </Link>
            </div>
            <nav>
                <div className="w-[250px] fixed md:static top-0 bottom-0 left-0 z-40 px-5 py-3">
                    {links.map((link, index) => {
                        return (
                            <div className="flex flex-col">
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`${
                                        link.path === pathname &&
                                        "flex gap-5 [&>*]:my-auto text-accent border-b-[1px] border-accent"
                                    } capitalize font-medium hover:text-accent transition-all pt-10`}
                                >
                                    {link.name}
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
