import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

import { FaUserEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockMembers = [
    {
        id: "INV001",
        name: "João Bernardo",
        email: "jb@email.com",
        teacher: "Teacher 01",
        edit: <FaUserEdit />,
    },
    {
        id: "INV002",
        name: "Vitória Pistori",
        email: "vitoria@email.com",
        teacher: "Teacher 03",
        edit: <FaUserEdit />,
    },
    {
        id: "INV003",
        name: "Thomas José",
        email: "thomas@email.com",
        teacher: "Teacher 04",
        edit: <FaUserEdit />,
    },
    {
        id: "INV004",
        name: "Tereza Cristina",
        email: "tereza@email.com",
        teacher: "Teacher 02",
        edit: <FaUserEdit />,
    },
];

const Clients = () => {
    return (
        <>
            <div className="flex justify-between items-center pb-10">
                <div>
                    <h3>Members</h3>
                    <p className="desclaimer text-disclaimer font-normal">
                        Total of members: {mockMembers.length}
                    </p>
                </div>
                <div>
                    <Button>
                        <Link href="/register-member">
                            <div className="text-center">
                                Register new member
                            </div>
                        </Link>
                    </Button>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockMembers.map((id) => (
                        <TableRow key={id.id}>
                            <TableCell>{id.name}</TableCell>
                            <TableCell>{id.email}</TableCell>
                            <TableCell>{id.teacher}</TableCell>
                            <TableCell>{id.edit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Clients;
