import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { FaUserEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const mockEmployees = [
    {
        id: "INV001",
        name: "João Bernardo",
        email: "jb@email.com",
        position: "Teacher",
        edit: <FaUserEdit />,
    },
    {
        id: "INV002",
        name: "Vitória Pistori",
        email: "vitoria@email.com",
        position: "Secretary",
        edit: <FaUserEdit />,
    },
    {
        id: "INV003",
        name: "Thomas José",
        email: "thomas@email.com",
        position: "Security Guard",
        edit: <FaUserEdit />,
    },
    {
        id: "INV004",
        name: "Tereza Cristina",
        email: "tereza@email.com",
        position: "Teacher",
        edit: <FaUserEdit />,
    },
];

const Employees = () => {
    return (
        <>
            <div className="flex justify-between items-center pb-10">
                <div>
                    <h3>Employees</h3>
                    <p className="desclaimer text-disclaimer font-normal">
                        Total of employees: {mockEmployees.length}
                    </p>
                </div>
                <div>
                    <Button>
                        <Link href="/register-employee">
                            <div className="text-center">
                                Register new employee
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
                        <TableHead>Position</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockEmployees.map((id) => (
                        <TableRow key={id.id}>
                            <TableCell>{id.name}</TableCell>
                            <TableCell>{id.email}</TableCell>
                            <TableCell>{id.position}</TableCell>
                            <TableCell>{id.edit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Employees;
