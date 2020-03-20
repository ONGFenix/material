import React from 'react';

import {NavLink} from 'react-router-dom';

import contents from '../../contents';

const Main = () => {
    return(
        <div className="content">
            <a href="https://drive.google.com/drive/folders/1bL9reX9ibbPGa8ijhYL-SWGI-SdyrVDB?usp=sharing"><h1>Link para o drive de conteúdo</h1></a>
            <ul>
                {contents.map(page => (
                    <NavLink to={page.link} key={page.link} className="navlink" activeClassName="navlink-active">
                        <li>
                            {page.materia}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    )
}

export default Main;