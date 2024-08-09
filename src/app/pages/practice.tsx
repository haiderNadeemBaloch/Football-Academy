import { Badge, Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';

export default function Practice() {
    return (
        <>
            <h1>this is the first page to run</h1>
            <Button variant="contained" color="primary">Hello world</Button>
            <Badge badgeContent={4} color="primary">
                <MailIcon color="action" />
            </Badge>
            <Button variant="contained" color="primary">Hello one</Button>
            <Button variant="contained" color="primary">Hello two</Button>
        </>
    );
}
