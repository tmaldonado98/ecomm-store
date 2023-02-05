import './Header.css';
import { Typography } from '@material-ui/core';


export default function Header(){
    return (
        <section>
        <Typography variant='h2'>
            Browse David Maldonado's Latest Works For Sale
        </Typography>
        <Typography variant='p'>This section can be an image carousel for latest works</Typography>
        {/* <h4>

        </h4> */}
        <input type="button" value='Browse'></input>
        </section>
    )
}