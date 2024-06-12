import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Card, CardContent } from "@/components/ui/card";

const mockMembers = [
    {
        id: "INV001",
        name: "João Bernardo",
        email: "jb@email.com",
        status: "Active",
        actions: "See more",
    },
    {
        id: "INV002",
        name: "Vitória Pistori",
        email: "vitoria@email.com",
        status: "Active",
        actions: "See more",
    },
    {
        id: "INV003",
        name: "Thomas José",
        email: "thomas@email.com",
        status: "Active",
        actions: "See more",
    },
    {
        id: "INV004",
        name: "Tereza Cristina",
        email: "tereza@email.com",
        status: "Active",
        actions: "See more",
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
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {mockMembers.map((id) => (
                        <TableRow key={id.id}>
                            <TableCell className="font-medium">
                                {id.name}
                            </TableCell>
                            <TableCell>{id.email}</TableCell>
                            <TableCell>{id.status}</TableCell>
                            <TableCell className="text-right">
                                {id.actions}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
};

export default Clients;
