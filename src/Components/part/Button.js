import React, { useState } from "react";
import { Button } from "@mui/material";

function Tombol({statSelect, remove, add, id}){

    const [selected, setSelected] = useState(statSelect)

    const pesan = () =>{
        setSelected(!selected);
        console.log(selected);
        if (selected) {
            remove(id)
        } else {
            add(id)
        }
    }

    return (
    <>
        <Button size="small" color="primary" onClick={pesan}>
            {selected ?
                "Deselect"
                :
                "Select"
            }
        </Button>    
    </>
    )
}

export default Tombol;