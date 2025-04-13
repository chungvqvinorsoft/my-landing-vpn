import classNames from "classnames/bind";
import styles from "./HeaderPage.module.css";
import { useState } from "react";
import { Button, Drawer, Flex, Grid, Menu } from "antd";
import { itemMenu } from "../../types/layout";
import logo from "../../access/icons/logo.svg";
import menu from "../../access/icons/menu.svg";

const cx = classNames.bind(styles);

interface HeaderPageProps {
  menuItems: Array<itemMenu>;
  onShowModalAuth: (value: string) => void;
}

function HeaderPage({ menuItems, onShowModalAuth }: HeaderPageProps) {
  const [openMenuMb, setOpenMenuMb] = useState<boolean>(false);

  const { useBreakpoint } = Grid;
  const isMobile = useBreakpoint();
  const handleOpenMenu = () => {
    setOpenMenuMb(!openMenuMb);
  };

  const menus = menuItems?.map((item: itemMenu) => {
    return {
      ...item,
      label: <a href={item?.key}>{item?.label}</a>,
    };
  });

  return (
    <>
      <div className={cx("logo")}>
        <img src={logo} />
        <p className={cx("name")}>LaslesVPN</p>
      </div>
      {(isMobile?.xs || isMobile?.sm) && !isMobile?.md ? (
        <>
          <Button type="text" onClick={handleOpenMenu}>
            <img src={menu} />
          </Button>
          <Drawer onClose={handleOpenMenu} open={openMenuMb}>
            <Menu
              mode="vertical"
              defaultSelectedKeys={["#about"]}
              items={[...menus]}
              className={cx("menu-xs")}
            />
            <Button className={cx("btn-act")} type="text">
              Sign In
            </Button>
            <Button className={cx("btn-act")} color="danger" variant="outlined">
              Sign Up
            </Button>
          </Drawer>
        </>
      ) : (
        <>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={["#about"]}
            items={[...menus]}
            className={cx("memu")}
          />
          <Flex gap={12}>
            <Button
              className={cx("btn-act")}
              type="text"
              onClick={() => onShowModalAuth("#si")}
            >
              Sign In
            </Button>
            <Button
              className={cx("btn-act")}
              color="danger"
              variant="outlined"
              onClick={() => onShowModalAuth("#su")}
            >
              Sign Up
            </Button>
          </Flex>
        </>
      )}
    </>
  );
}

export default HeaderPage;
