

const Page = () => {
  return (
    <div className='bg-blue-300 h-screen flex items-center justify-center'>
      <div className='bg-green-100 max-w-md p-8 rounded-lg shadow-md w-full'>
        <h2 className='text-center text-xl font-bold mb-6'>Login</h2>
        
        <div className='mb-8'>
          <input
            type='email'
            placeholder='Email'
            className='w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>
        
        <div className='mb-8'>
          <input
            type='password'
            placeholder='Password'
            className='w-full p-2 border border-blue-300 rounded focus:outline-none focus:ring focus:ring-blue-500'
          />
        </div>

        <button className='bg-blue-400 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded w-full mt-6'>
          Login
        </button>
      </div>
    </div>
  );
}

export default Page;
