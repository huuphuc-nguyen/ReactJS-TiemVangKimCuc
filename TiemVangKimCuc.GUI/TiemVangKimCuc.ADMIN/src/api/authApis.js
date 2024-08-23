import axiosInstance from "./axiosConfig";
import { toast } from "sonner";
import { getGreeting } from "../ultils/greeting";

const authApis = {
    login: async(data) => {
        const promise = axiosInstance.post('/api/Auth/Login', data);

        toast.promise(promise, {
            loading: 'Đang xử lý...',
            success: () => {
                return `Đăng nhập thành công`;
            },
            error: () => {
                return 'Sai tài khoản hoặc mật khẩu';
            },
        });
        
        const response = await promise;

        return response;
    },
    loadUser: async() => {
        const promise = axiosInstance.get('/api/Auth/LoadUser');

        toast.promise(promise, {
            success: (response) => {
                return `${getGreeting()} ${response.dataResult.fullName}`;
            },
        });
        
        const response = await promise;

        return response;
    }
}

export default authApis;