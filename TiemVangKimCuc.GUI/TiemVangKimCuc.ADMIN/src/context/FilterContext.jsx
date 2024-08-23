import { createContext, useState, useMemo } from "react";
import { set } from "react-hook-form";

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [selectedCategoryId, setSelectedCategoryId] = useState([]);
    const [selectedMaterialId, setSelectedMaterialId] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [pageIndex, setPageIndex] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [totalPage, setTotalPage] = useState(0); 

    console.log('context');

    const filterObj = useMemo(() => ({
        searchKey: searchKey,
        chatLieus: selectedMaterialId.length === 0 ? null : selectedMaterialId,
        loaiTrangSucs: selectedCategoryId.length === 0 ? null : selectedCategoryId,
    }),[searchKey, selectedMaterialId, selectedCategoryId]);

    const paginationObj = useMemo(() => ({
        pageIndex: pageIndex,
        pageSize: pageSize,
    }), [pageIndex, pageSize]);

    return (
        <FilterContext.Provider value={{
            searchKey,
            setSearchKey,
            selectedCategoryId,
            setSelectedCategoryId,
            selectedMaterialId,
            setSelectedMaterialId,
            pageIndex,
            setPageIndex,
            pageSize,
            setPageSize,
            filterObj,
            paginationObj,
            totalPage,
            setTotalPage,
        }}>
        {children}
        </FilterContext.Provider>
    );
}
