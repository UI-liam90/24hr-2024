import { useEffect, useState } from "react";
import { getBids } from "~data/adventures";

const Bids = ({ adventure }) => {
    const [bids, setBids] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("bid effect");
        const getAllBids = async () => {
            setLoading(true);
            const data = await getBids(adventure.databaseId, adventure.adventureFields.maxPlayers);
            console.log("bids data", data);
            setBids(data);
            setLoading(false);
        };
        getAllBids();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <ul>
            {bids.nodes.map((bid, index) => (
                <li key={index}>{bid.bidFields.bidName}</li>
            ))}
        </ul>
    );
};
export default Bids;
