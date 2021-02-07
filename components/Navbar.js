import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'next/link'
export default function Navbar({children}) {
    return (
        <div>
            <AppBar>
                <Toolbar variant="dense">
                     Learning Next Js
                     <Link href="/about"><a>About</a>
                     </Link>
                     <Link href="/"><a>Home</a>
                     </Link>                           
                </Toolbar>
            </AppBar>
        {children}
            
        </div>
    )
}
