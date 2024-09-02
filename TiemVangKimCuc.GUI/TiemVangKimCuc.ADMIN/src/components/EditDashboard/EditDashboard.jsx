import {useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../../features/api/apiSlice';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IoArrowBackSharp } from "react-icons/io5";

const validationSchema = yup.object().shape({
  tenSanPham: yup.string().required('Tên sản phẩm không được để trống'),
  trongLuongSanPham: yup.string().required('Trọng lượng sản phẩm không được để trống'),
  moTa: yup.string(),
})

const EditDashboard = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [tiltle, setTilte] = useState(id ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm');
    const {data: product, error, isLoading} = useGetProductsByIdQuery(id);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(validationSchema)
    })

    const onSubmit = (data) => {

    }

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='w-full px-10'>
        
        <h1 className='text-primary font-semibold text-2xl mt-10 text-center animate-fade-in w-full relative'>
            <IoArrowBackSharp className='cursor-pointer absolute top-1' onClick={()=>{navigate(-1)}}/>
            {tiltle}
        </h1>
    

    </form>
  )
}

export default EditDashboard
