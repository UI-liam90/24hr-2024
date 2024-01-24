import React, { useEffect, useState } from "react";

import { getGravityForm } from "@components/helpers/GravFormHelpers/server";
import GravityFormForm from "@components/helpers/GravFormHelpers";

const GravForm = ({ id, presetValues }) => {
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFormData = async () => {
            setLoading(true);
            const data = await getGravityForm(id);
            console.log(data);
            setSuccess(data);
            setLoading(false);
        };
        console.log("effect");
        handleFormData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, presetValues]);

    if (loading) {
        return <p>Form Loading...</p>;
    }
    return (
        <>
            <GravityFormForm data={success} presetValues={presetValues} />
        </>
    );
};
export default GravForm;
