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
        name: "clients",
        path: "/clients",
    },
    {
        name: "teachers",
        path: "/teachers",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="w-[250px] fixed md:static top-0 bottom-0 left-0 z-40 pl-6 py-3 pr-6">
            <nav>
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
            </nav>
        </div>
    );
};

export default Sidebar;
