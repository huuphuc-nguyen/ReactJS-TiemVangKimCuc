import axiosInstance from "./axiosConfig";

const productApis = {
  getListProducts: async () => {
    const response = await axiosInstance.get('/api/DanhMuc/GetAllChatLieu');
      
      return response;
    },
  
  getListCategories: async () => {
    const response = await axiosInstance.get('/api/DanhMuc/GetAllLoaiTrangSuc');

    return response;
    },

  getListMaterials: async () => {
    const response = await axiosInstance.get('/api/DanhMuc/GetAllChatLieu');

    return response;
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

  
