import { get } from "react-scroll/modules/mixins/scroller";
import axiosInstance from "./axiosConfig";

const productApis = {
  getListProducts: async () => {
    const response = await axiosInstance.get('/api/DanhMuc/GetAllChatLieu');
      
    // Add name property
    // The name property is used to display the name of the material
    const modifiedResponse = response.map((item) => ({
      ...item,
      name: item.chatLieu 
      }))

      return modifiedResponse;
    },
  
  getListCategories: async () => {
    const response = await axiosInstance.get('api/DanhMuc/GetAllLoaiTrangSuc');
     
    // Add name property
    // The name property is used to display the name of the material
    const modifiedResponse = response.map((item) => ({
     ...item,
     name: item.loaiTrangSuc 
     }))

     return modifiedResponse;
    },

  getProductsBySearch: async (filterObj, paginationObj) => {
    const filter = encodeURIComponent(JSON.stringify(filterObj));
    const pagination = encodeURIComponent(JSON.stringify(paginationObj));
    const response = await axiosInstance.get(`/api/SanPham/SearchSanPham?filter=${filter}&pagination=${pagination}`);

    return response;
  },

  getProductById: async(id) => {
    const response = await axiosInstance.get(`/api/SanPham/GetSanPham/?id=${id}`);
    return response;
  }
}

export default productApis;

  
