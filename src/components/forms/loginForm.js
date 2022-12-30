import { Form, Input, Button } from "antd";

const LoginForm = (props) => {
    const onFinish = (values) => {
        localStorage.setItem("isLoggedIn", true);
        props.onFinish(true);
    };
    
    
    return (
        <Form className="form"
            name="basic"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 20,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="E-mail"
                name="email"
                rules={[
                {
                    required: true,
                    type: "email",
                    message: 'Please input your e-mail!',
                },
                ]}
            >
                <Input />
            </Form.Item>
    
            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password! It should have at least 6 characters, one lowercase letter, one uppercase letter and one number.',
                    pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{6,}$",
                },
                ]}
            >
                <Input.Password />
            </Form.Item>
    
          <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
                Log in
            </Button>
          </Form.Item>
        </Form>
    );
};

export default LoginForm;