import React from 'react';
import pdf from "../../assets/resume/Resume2021.pdf";


const Nav = (props) => {

    const { categories = [], setCurrentCategory, currentCategory } = props;

    const bg = currentCategory.name.toLowerCase() + '-color';
    console.log(bg);

    return (
        <header className={`flex-row px-2 ${bg}`}>
            <h2 className="my-1">
                <a href="/">Zack Anderson</a>
            </h2>
            <nav className="my-2">
                <ul className="flex-row">
                    {categories.map((category) => (
                        <li className={`mx-2 ${currentCategory.name === category.name && `navActive`}`}
                            key={category.name}>
                            <span onClick={() => setCurrentCategory(category)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                    <li className="mx-2">
                        <a href={pdf} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
    );

}

export default Nav;