import Button from '@mui/material/Button';
import { Link as RouterLink } from 'react-router-dom';

const NavButtton = (
    { page, path }:{
        page: string,
        path: string
    }
) => {
    return <Button color="inherit" component={RouterLink} to={path}>{page}</Button>
}

export default NavButtton;