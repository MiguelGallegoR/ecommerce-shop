import { useRouteError } from "react-router-dom";
import { Button, Result } from 'antd';
import { MehOutlined } from '@ant-design/icons';
import "../styles/errorPage.css";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
     <Result
    icon={<MehOutlined className="error-icon"/>}
    title="Sorry, the page you visited does not exist!"
    extra={<Button type="primary" className="error-button">Back home</Button>}
  />
    </div>
  );
}