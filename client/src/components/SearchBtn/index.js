import React from "react";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

function SearchBtn(props) {
    return <Button
        color="secondary"
        startIcon={<SearchIcon />}
        {...props}
        color="primary"
    >Search
      </Button>
}

export default SearchBtn