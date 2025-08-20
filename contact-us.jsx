import { Form, Input, Button, Select } from "antd";
import { IoCall } from "react-icons/io5";

const { Option } = Select;

const ContactUs = () => {
  const onFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <div id="contact" className="mt-10">
      <hr className="border-t border-gray-400 my-4" />
      <div className="flex items-center w-fit border border-secondary rounded-full ">
        <span className="bg-secondary w-14 h-14 flex items-center justify-center rounded-full">
          <IoCall className="text-white text-xl" />
        </span>
        <h2 className="text-2xl text-secondary font-semibold pr-4 ">
          Get In Touch
        </h2>
      </div>
      <div className="flex justify-center mt-10">
        <Form
          name="custom-form"
          onFinish={onFinish}
          layout="vertical"
          className="w-96 max-w-xl border  border-secondary p-6 rounded-xl shadow-md bg-white"
        >
          {/* Name */}
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input
              className=" border-secondary"
              placeholder="Enter your name"
            />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input
              className=" border-secondary"
              placeholder="Enter your email"
            />
          </Form.Item>

          {/* Option */}
          <Form.Item
            label="Select Option"
            name="option"
            rules={[{ required: true, message: "Please select an option" }]}
          >
            <Select
              placeholder="Choose an option"
              className="border rounded-lg border-secondary"
            >
              <Option value="basic">Basic</Option>
              <Option value="standard">Standard</Option>
              <Option value="premium">Premium</Option>
            </Select>
          </Form.Item>

          {/* Description */}
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description" }]}
          >
            <Input.TextArea
              className=" border-secondary"
              rows={4}
              placeholder="Enter your description here"
            />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item>
            <div className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className=" px-14 bg-secondary"
              >
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactUs;
