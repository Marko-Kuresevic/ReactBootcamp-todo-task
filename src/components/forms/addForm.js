import { useContext } from "react";
import { Form, Input, Button } from "antd";
import { v4 as uuidv4 } from 'uuid';
import { AddFormContext } from "../../context/addFormContext";

import "./form.css";

const AddForm = ({ onAdd }) => {
  const { inputValue, isButtonDisabled, shouldFocus, setShouldFocus, updateInputValue, resetForm } = useContext(AddFormContext);
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    const newToDo = {
      id: uuidv4(),
      title: values.new.trim(),
      completed: false,
    };
    onAdd(newToDo);
    form.resetFields();
    resetForm();
  };

  const onInputChange = (event) => {
    let input = event.target.value;
    updateInputValue(input);
  };

  return (
    <Form className="form"
      form={form}
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 15,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="New to-do:"
        name="new"
      >
        <Input
            placeholder="Add a new to-do"
            value={inputValue}
            onChange={onInputChange}
            autoFocus={shouldFocus}
            onFocus={() => setShouldFocus(false)}
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button
            type="primary"
            htmlType="submit"
            disabled={isButtonDisabled}
        >
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddForm;
