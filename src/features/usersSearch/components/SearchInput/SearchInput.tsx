import React, { useState } from 'react';
import { TextInput } from '../../../../components/TextInput/TextInput';

interface SearchInputProps {
  searchText: string;
  setSearchText: (newSearchText: string) => void;
}

const SearchInput = ({ searchText, setSearchText }: SearchInputProps) => {
  return <TextInput value={searchText} onChangeText={setSearchText} />;
};

export default SearchInput;
