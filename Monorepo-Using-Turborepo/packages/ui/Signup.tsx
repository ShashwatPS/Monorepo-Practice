import {TextField} from "@mui/material";

export function Signup(){
    return(
        <div>
            <TextField id="outlined-basic" label="Username" variant="outlined" />
            <TextField id="outlined-basic" label="Password" variant="outlined" />
            <button>Submit</button>
        </div>
    )
}
