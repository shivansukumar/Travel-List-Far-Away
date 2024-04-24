export default function Stats({ items }) {
    if (!items.length) {
        return (
            <p className="stats">
                <em>
                    Start preparing for your  trip🚵‍♂️
                </em>
            </p>
        );
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentage = Math.round((numPacked / numItems) * 100);

    return (
        <footer className="stats">
            <em>
                {percentage === 100 ? "You are ready for the trip 🚵‍♂️" :
                    `💼You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}
            </em>
        </footer>
    );
}
