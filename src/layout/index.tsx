import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import { ReactNode, useState } from "react";
import styles from "./layout.module.css";
import classNames from "classnames/bind";
import HeaderPage from "../components/HeaderPage";
import { menuItems } from "./layout";
import Authentication from "../pages/Authentication";
const cx = classNames.bind(styles);
interface LayoutPage {
  children: ReactNode;
  footer: ReactNode;
}

function LayoutPage({ children, footer }: LayoutPage) {
  const [isShowModalAuth, setIsShowModalAuth] = useState<boolean>(false);
  const [initTabAuth, setInitTabAuth] = useState<string>('#si');

  const handleShowModalAuth = (value: string) => {
    setIsShowModalAuth(!isShowModalAuth)
    setInitTabAuth(value);
  }
  return (
    <>
      <Layout className={cx("layout")}>
        <Header className={cx("header")}>
          <HeaderPage menuItems={menuItems} onShowModalAuth={(tabActive) => handleShowModalAuth(tabActive)} />
        </Header>
        <Content className={cx("content")}>{children}</Content>
      </Layout>
      <Footer>
        <Layout className={cx("footer")}>{footer}</Layout>
      </Footer>
      <Authentication open={isShowModalAuth} onClose={handleShowModalAuth} tabInit={initTabAuth} />
    </>
  );
}

export default LayoutPage;
