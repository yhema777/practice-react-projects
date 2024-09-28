import RestroItems from './RestroItems';

function Category({ itemCards }) {
    return (
        <>
            {itemCards ? (
                <div>
                    {itemCards.map((card, index) => (
                        <RestroItems key={index} card={card} />
                    ))}
                </div>
            ) : null} {/* Render nothing if itemCards is undefined or empty */}
        </>
    );
}

export default Category;
