import {useState,useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetProductsByIdQuery } from '../../features/api/apiSlice';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { IoArrowBackSharp } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";

const validationSchema = yup.object().shape({
  tenSanPham: yup.string().required('Tên sản phẩm không được để trống'),
  trongLuongSanPham: yup.string().required('Trọng lượng sản phẩm không được để trống'),
  moTa: yup.string(),
  img: yup.mixed().required("Ảnh không được để trống").test('fileType','Chỉ chấp nhận file ảnh', (value) => {
    return value && value[0] && ['image/jpeg', 'image/png'].includes(value[0].type);
  })
})

const EditDashboard = () => {
    // Use for going back to the manage dashboard
    const navigate = useNavigate();

    const {id} = useParams();
    const [isEdit,setIsEdit] = useState(id ? true : false);
    const {data: product, error, isLoading} = useGetProductsByIdQuery(id);


    // React hook form
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(validationSchema)
    })
    const fileInputRef = useRef(null);
    const {ref, ...rest} =  register('img');
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
      if (e.target.files && e.target.files.length > 0) {
        setSelectedFile(e.target.files[0]);
      }
    }
    const onSubmit = (data) => {

    }

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)} 
        className='w-full px-10'>
        
        <h1 className='text-primary font-semibold text-2xl my-10 text-center animate-fade-in w-full relative'>
            <IoArrowBackSharp className='cursor-pointer absolute top-1' onClick={()=>{navigate(-1)}}/>
            {isEdit ? "Chỉnh sửa sản phẩm" : "Thêm sản phẩm"}
        </h1>

        <div>
          <label className='block mt-5 text-lg font-semibold text-primary'>
            Ảnh
          </label>

          <input 
            type="file" 
            {...rest} 
            ref={(e) => {
              ref(e);
              fileInputRef.current = e;
            }}
            onChange={handleFileChange}
            className='hidden'/>

          {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="product" className='w-40 h-40 mx-auto mt-2'/>}

          {errors.img && <p className='text-red-500 w-full text-center mb-2'>{errors.img.message}</p>}

          <button
            onClick={(e) =>{e.preventDefault();fileInputRef.current.click()} }
            className='border-[3px] shadow-md border-primary py-3 lg:px-6 px-2 text-primary font-semibold rounded-lg border-dashed mx-auto block hover:bg-slate-100'>
              <FiUpload size={20} className='w-full text-center mb-1 text-primary'/>
              Tải ảnh lên
          </button>
        </div>

        <div>
          <label htmlFor="tenSanPham" className='block mt-5 text-lg font-semibold text-primary'>
            Tên sản phẩm
          </label>
          
          <input 
            type="text" 
            id="tenSanPham" {...register('tenSanPham')} 
            defaultValue={product?.tenSanPham}
            placeholder='Nhập tên sản phẩm'
            className={`w-full border border-gray-300 rounded-md py-2 px-3 mt-1 ${errors.tenSanPham ? 'border-red-500 border-2 focus:outline-red-500' :''}`}/>
            
          {errors.tenSanPham && <p className='text-red-500'>{errors.tenSanPham.message}</p>}
        </div>

        <div>
          <label htmlFor="trongLuongSanPham" className='block mt-5 text-lg font-semibold text-primary'>
            Trọng lượng
          </label>
          <input 
            type="text" 
            id="trongLuongSanPham" {...register('trongLuongSanPham')} 
            placeholder='Nhập trọng lượng sản phẩm'
            className={`w-full border border-gray-300 rounded-md py-2 px-3 mt-1 ${errors.trongLuongSanPham ? 'border-red-500 border-2 focus:outline-red-500' :''}`}/>
            {errors.trongLuongSanPham && <p className='text-red-500'>{errors.trongLuongSanPham.message}</p>}
        </div>

        <div>
          <label htmlFor="moTa" className='block mt-5'>Mô tả</label>
          <textarea
            className='w-full border border-gray-300 rounded-md py-2 px-3 mt-1 h-40'
          />
        </div>
        <div>
          <label htmlFor="tenSanPham" className='block mt-5'>Loại trang sức</label>
        </div>
        <div>
          <label htmlFor="tenSanPham" className='block mt-5'>Chất liệu</label>
        </div>

        <button className='bg-primary text-white py-2 px-5 mt-5' onClick={onSubmit}>Lưu</button>
        
    

    </form>
  )
}

export default EditDashboard
