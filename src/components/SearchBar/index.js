import React, { useState, useEffect, useRef } from "react";

//Image
import searchIcon from '../../images/search-icon.svg';

//Styles
import { Wrapper, Context } from "../SearchBar/SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true);

    useEffect(() => {
        if (initial.current) {
            initial.current = false;
            return;
        }

        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500)

        return () => clearTimeout(timer);
    }, [setSearchTerm, state])

    return (
        <Wrapper>
            <Context>
                <img src={searchIcon} alt='search-icon' />
                <input type='text' placeholder='Search Movie' onChange={event => setState(event.currentTarget.value)} value={ state }/>
            </Context>
        </Wrapper>
    )
};

export default SearchBar;