import { useEffect, useState } from 'react';
import { Form, Input, InputNumber,  Table, Typography } from 'antd';
import axios from 'axios';

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const Categories = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const getCategories=async()=>{
           try{
              const response =await axios.get("https://ecommerce-backend-fawn-eight.vercel.app/api/categories")
              
              setData(response.data)
           } catch(err){
            console.log(err);
           }
    }
    getCategories()
  },[])
  console.log(data);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      width: '25%',
      editable:false,
      edit:(imgUrl)=>{
        return <img  src={imgUrl} alt={imgUrl}/>
      }
    },
    {
      title: 'name',
      dataIndex: 'name',
      width: '15%',
      editable: true,
    },
   
    {
      title: 'Edit',
      dataIndex: 'editOperation',
      render: (_, record) => {
       
        return (
          <Typography.Link >
            Edit
          </Typography.Link>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        // editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
       
      />
    </Form>
  );
};
export default Categories;