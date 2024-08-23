import { useEffect } from 'react'
import background from '../../assets/images/login_bg.jpg'
import { useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillKeyFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncLoginUsers, getIsAuthencating, getIsAuthenticated } from '../../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

const schema = yup.object().shape({
  userName: yup.string().required('Vui lòng nhập tên đăng nhập'),
  passWord: yup.string().required('Vui lòng nhập mật khẩu')
})

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthencating = useSelector(getIsAuthencating);
  const isAuthenticated = useSelector(getIsAuthenticated);

  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data) => {
    dispatch(fetchAsyncLoginUsers(data))
    reset()
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/admin/dashboard/san-pham');
    }
  }, [isAuthenticated, navigate]);

  return (
    <main 
      className={`h-lvh w-full bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black before:opacity-30`}
      style={{ backgroundImage: `url(${background})` }}>
      <div className='grid place-items-center h-full'>
        <div className='shadow-xl rounded-xl h-[25rem] lg:w-[30rem] w-[22rem] bg-white/60 backdrop-blur-md '>
          <form 
            className='w-full h-full flex flex-col items-start justify-center py-5 lg:px-10 px-5' 
            onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-2xl font-bold text-primary self-center'>Tiệm Vàng Kim Cúc</h1> 

            <label className='mb-2 mt-8'>Tên đăng nhập</label>
            <div className='relative w-full'>
              <input
                {...register('userName')}
                className='w-full rounded-lg h-9 px-2 pl-8 pb-1 shadow-lg outline-none focus:border-black focus:border-2'
              />
                <BsFillPersonFill className='text-lg text-black absolute top-2 left-2' />
            </div>
            <p className='text-sm text-red-500 font-semibold mt-1'>{errors.userName?.message}</p>

            <label className='mb-2 mt-10'>Mật khẩu</label>
            <div className='relative w-full'>
              <input
                type="password"
                {...register('passWord')}
                className='w-full rounded-lg h-9 px-2 pl-8 pb-1 shadow-lg outline-none focus:border-black focus:border-2' />
                <BsFillKeyFill className='text-lg text-black absolute top-2 left-2' />
            </div>
            <p className='text-sm text-red-500 font-semibold mt-1'>{errors.passWord?.message}</p>
            
            <button 
              type="submit"
              className='self-center bg-primary text-white rounded-lg px-4 py-2 mt-8 shadow-md hover:scale-105 duration-300'>
              {isAuthencating ? 'Đang đăng nhập' : 'Đăng nhập'}
              </button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
