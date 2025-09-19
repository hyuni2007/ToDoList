import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header class="mx-0 mt-0 p-5 bg-green-200">
            <Link to="/sign" class="p-5 hover:text-blue-400">회원가입</Link>
            <Link to="/login" class="p-5 hover:text-blue-400">로그인</Link>
            <Link to="/" class="p-5 hover:text-blue-400">할 일 목록</Link>
        </header>
    );
}