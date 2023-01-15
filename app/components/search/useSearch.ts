import { ChangeEvent, useState } from "react";

import { useDebounce } from "../../hooks/useDebounce";
import {postApi} from "../../store/api/post.api";

export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debounceSearch = useDebounce(searchTerm, 500);

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    const {data: posts, isSuccess } = postApi.useGetPostsByNameQuery(debounceSearch, {
        skip: !debounceSearch,
        selectFromResult: ({data, ...rest}) => ({
            data: data?.posts,
            ...rest
        })
    })

    return {
        handleSearch, posts, isSuccess, searchTerm
    }
}