import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "../ui/Input";
import searcIcon from "../assets/search.svg";
import { countries } from "../data";
import theme from "../theme";
import { Link } from "react-router-dom";

const SearchContainer = styled.form`
  width: 100%;
  position: relative;
`;

const SearchInput = styled(Input)`
  width: 100%;
  margin-top: 3rem;
  padding-right: 3.5em;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 1.25em;
  bottom: 1.5em;
`;

const Suggestion = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.color.black};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.md};
  letter-spacing: ${theme.font.letterSpacing};
  padding: 0 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${theme.color.grey};
  }
`;

const DropdownLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${theme.color.black};
  font-weight: ${theme.font.weight.bold};
  font-size: ${theme.font.size.sm};
  line-height: ${theme.font.lineHeight.md};
  letter-spacing: ${theme.font.letterSpacing};
  padding: 0 1.5rem;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: ${theme.color.grey};
  }
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  & > img {
    margin-top: -5px;
    margin-left: 7px;
    height: 15px;
    width: 15px;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transform: translate(-7%, 110%);
  transition: opacity 0.3s ease;
`;

const Search = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const [dropdownActive, setDropdownActive] = useState(false);

  // results - [{ title, link }]
  const findResults = e => {
    const term = e.target.value;
    setInput(term);

    const result = countries
      .filter(c => c.keywords.find(k => k.includes(term.toLowerCase())))
      .map(r => ({ title: r.title, path: `/vize/${r.name}` }));

    if (result) {
      setResults(result);
      setDropdownActive(true);
    } else {
      setResults([]);
      setDropdownActive(false);
    }
    if (!term) {
      setResults([]);
    }
  };

  const suggestionList = results.map(item => {
    const { title, path } = item;
    return <Suggestion to={path}>{title}</Suggestion>;
  });

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Pretrazite zemlje" value={input} onInput={findResults} />
      <SearchIcon src={searcIcon} alt="Search Field" />
      <DropdownMenu visible={dropdownActive}>{suggestionList}</DropdownMenu>
    </SearchContainer>
  );
};

export default Search;
