import { FunctionComponent, useContext, useEffect, useState } from "react";
import { CategoryContext } from "./Context";
import { CategoryType } from "./models/Category";

export const CategoryList: FunctionComponent = () => {
    const [categoriesData, setCategoriesData] = useState([]);
    const { category, setCategory } = useContext(CategoryContext);

    useEffect(() => {
        const url =
            "http://localhost:8080/api/categories";
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setCategoriesData(json);
            });
    }, []);

    function handleClick(event: any, category: string) {
        event.preventDefault();
        console.log("click", event, category);
        setCategory(category);
    }

    return (
        <div className="scrollmenu">
            {
                categoriesData && categoriesData.map((category: CategoryType) =>
                    <a className="categoryCls" onClick={e => handleClick(e, category.code)} key={category.code}>{category.description}</a>
                )
            }
        </div>

    );
}
