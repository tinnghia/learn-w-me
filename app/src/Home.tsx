import "./AppStyles.css";

import { Cards } from "./Cards";
import { CategoryList } from "./CategoryList";

export default function Home() {
    return (
        <>
            <CategoryList />
            <div>
                <Cards />
            </div>
        </>
    );
}
