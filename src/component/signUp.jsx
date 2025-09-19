export default function Signup() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded p-5 w-full max-w-md">
                <h1 className="text-2xl text-center font-bold mb-4">회원가입</h1>
                <div className="m-4">
                    <div className='mb-1 p-1'>
                        <label className="font-bold mr-2">이름</label>
                        <input type='name' className="border rounded" />
                    </div>
                    <div className='mb-1 p-1'>
                        <label className="font-bold mr-2">아이디</label>
                        <input type='text' className="border rounded" />
                        <button className="bg-white shadow-md m-2 p-1 border rounded hover:bg-gray-50">아이디 중복 확인</button>
                    </div>
                    <div className='mb-3 p-1'>
                        <label className="font-bold mr-2">비밀번호</label>
                        <input type='password' className="border rounded" />
                    </div>
                    <div className='p-1'>
                        <label className="font-bold mr-2">비밀번호 확인</label>
                        <input type='password' className="border rounded" />
                    </div>
                <button className="bg-white shadow-md p-1 border rounded hover:bg-gray-100">회원가입</button>
                </div>
            </div>
        </div>
    );
}