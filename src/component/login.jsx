export default function Login() {
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-md w-full max-w-md">
                <h1 className="text-2xl text-center font-bold mt-4">로그인</h1>
                <div className="m-4">
                    <div className="p-2 m-2">
                        <label className="font-bold mr-2">아이디:</label>
                        <input type='text' className="border rounded" />
                    </div>
                    <div className="p-2 m-2">
                        <label className="font-bold mr-2">비밀번호:</label>
                        <input type='password' className="border rounded" />
                    </div>
                    <button type='button' className="bg-white shadow-md p-1 border rounded hover:bg-gray-100">로그인</button>
                </div>
            </div>
        </div>
    );
}