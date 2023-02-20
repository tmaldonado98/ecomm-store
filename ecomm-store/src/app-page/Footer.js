import './Footer.css';
import { Typography } from '@material-ui/core';

export default function FooterSection(){
    return (
    <div id='footerContainer'>
        <div id='footerContent'>
            <Typography variant='p' className='footerCol'>Store</Typography>
            <div className='footerCol'>
                <Typography variant='p' className='first'>Menu</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>

            <div className='footerCol'>
                <Typography variant='p' className='first'>Help</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>

            <div className='footerCol'>
                <Typography variant='p' className='first'>Social</Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>
                <Typography variant='p'></Typography>        
            </div>
        </div>
    </div>
    )
}