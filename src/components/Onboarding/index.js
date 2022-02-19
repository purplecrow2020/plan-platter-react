import React from 'react'

import {
    useParams,
    Navigate,
  } from "react-router-dom";


export default function Onboarding() {
    const { 
        vendor_id,
        table_id
    } = useParams();

    localStorage.setItem('vendor_id', vendor_id);
    localStorage.setItem('table_id', table_id);
    return (
        <React.Fragment>
            <Navigate to="/" />
        </React.Fragment>

    )
 }
