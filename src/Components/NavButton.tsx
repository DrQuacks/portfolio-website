import Button from '@mui/material/Button';
import {Page} from '../App';

const NavButtton = (
    { page, clickHandler }:{
        page: Page,
        clickHandler: (page:Page) => void
    }
) => {
    const onClick = () => { 
        clickHandler(page)
    }
    return <Button color="inherit" onClick={onClick}>{page}</Button> 
}

export default NavButtton;