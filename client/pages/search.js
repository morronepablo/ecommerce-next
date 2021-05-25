import React, { useState, useEffect } from 'react';
import BasicLayout from "../layouts/BasicLayout";

export default function search() {

    useEffect(() => {
        document.getElementById("search-game").focus();
    }, [])
    return (
        <BasicLayout className="search">
            <h1>Busqueda...</h1>
        </BasicLayout>
    )
}
