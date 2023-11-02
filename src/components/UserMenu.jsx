import {
  SearchOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
export function UserMenu() {
  return (
    <div className="user-menu-container">
      <ul className="user-menu">
        <SearchOutlined />
        <UserOutlined />
        <HeartOutlined />
        <ShoppingOutlined />
      </ul>
    </div>
  );
}
