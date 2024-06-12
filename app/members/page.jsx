import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { FaUserEdit } from "react-icons/fa";

import { Card, CardContent } from "@/components/ui/card";

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
            <h3 className="pb-10">Members</h3>
            <div className="flex pb-10">
                <Card>
                    <CardContent>
                        <div className="text-center">Total of members</div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent>
                        <div className="text-center">Register new member</div>
                    </CardContent>
                </Card>
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
