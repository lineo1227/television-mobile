import { Button, Form, Input } from "antd-mobile";
import "./login.scss";
import useStore from "@/stores";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const { setLogin } = useStore();
    const navigate = useNavigate();
    const pathTo = () => {
        setIsLogin(!isLogin);
    };
    const handleLogin = () => {
        setLogin(true);
        navigate("/");
    };
    return (
        <div className="login">
            <div className="login-container">
                <h2>{isLogin ? "登录" : "注册"}</h2>
                <p>xx影视，给你最好的体验！</p>
                <Form layout="horizontal" mode="card" footer={<button onClick={handleLogin}>{isLogin ? "登录" : "注册"}</button>}>
                    <Form.Item label="手机号">
                        <Input placeholder="请输入" />
                    </Form.Item>
                    <Form.Item label="姓名">
                        <Input placeholder="请输入" />
                    </Form.Item>
                </Form>
            </div>
            <span onClick={pathTo}>去{!isLogin ? "登录" : "注册"}</span>
        </div>
    );
}
