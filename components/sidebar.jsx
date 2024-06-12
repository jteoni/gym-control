"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoMdPerson, IoMdSettings } from "react-icons/io";
import {
    FaHandsHelping,
    FaFileInvoiceDollar,
    FaRegMoneyBillAlt,
} from "react-icons/fa";

const links = [
    {
        icon: <IoMdPerson />,
        name: "employees",
        path: "/employees",
    },
    {
        icon: <FaHandsHelping />,
        name: "members",
        path: "/members",
    },
    {
        icon: <FaFileInvoiceDollar />,
        name: "invoices",
        path: "/invoices",
    },
    {
        icon: <FaRegMoneyBillAlt />,
        name: "plans",
        path: "/plans",
    },
    {
        icon: <IoMdSettings />,
        name: "settings",
        path: "/invoices",
    },
];

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col">
            <div className="py-10 bg-accent text-center">
                <Link href="/">
                    <h2 className="text-4xl font-semibold">Gym Control.</h2>
                </Link>
            </div>
            <nav>
                <div className="w-[250px] fixed md:static top-0 bottom-0 left-0 z-40 px-5 py-3">
                    {links.map((link, index) => {
                        return (
                            <div className="flex border-textColor border-b-[1px]">
                                <Link
                                    href={link.path}
                                    key={index}
                                    className={`${
                                        link.path === pathname &&
                                        "flex items-center [&>*]:my-auto text-accent border-b-[1px]"
                                    } flex items-center capitalize font-medium text-textColor hover:text-white transition-all pt-10`}
                                >
                                    <div className="mr-3">{link.icon}</div>
                                    <div>{link.name}</div>
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
