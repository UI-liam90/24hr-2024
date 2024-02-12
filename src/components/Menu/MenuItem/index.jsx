const MenuItem = ({ item }) => {
    const internal = /^\/(?!\/)/.test(item.path);
    if (internal) {
        return (
            <>
                {item.path.includes("#") ? (
                    <a className={`anchor-link ${item.cssClasses.join(" ")}`} href={item.path} target={item.target}>
                        {item.label}
                    </a>
                ) : (
                    <a className={`internal-link ${item.cssClasses.join(" ")}`} href={item.path} target={item.target}>
                        {item.label}
                    </a>
                )}
            </>
        );
    }

    return (
        <a className={`external-link ${item.cssClasses.join(" ")}`} href={item.path} target={item.target}>
            {item.label}
        </a>
    );
};

export default MenuItem;
