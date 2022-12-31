import React from "react";
import { useTheme } from "next-themes";
import { Navbar, Link, Text, Input } from "@nextui-org/react";

import { BsSun, BsMoon } from "react-icons/bs";
import { SearchIcon } from "./SearchIcon";
import { useRouter } from "next/router";

const NavBar = () => {
  const collapseItems = [
    {title:'Home', href:'/ecommercev1/'},
    {title:'Products', href:'/ecommercev1/products'},
    {title:'About', href:'/ecommercev1/about'},
  ];

  const router = useRouter();

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Toggle showIn="xs" />
      <Navbar.Brand
        css={{
          "@xs": {
            w: "12%",
          },
        }}
      >
        <Text b color="inherit" hideIn="xs">
          ECommerce.v1
        </Text>
      </Navbar.Brand>
      <Navbar.Content
        activeColor="secondary"
        hideIn="xs"
      >
        <Navbar.Link isActive={router.pathname == '/ecommercev1/'} href="/ecommercev1/">Home</Navbar.Link>
        <Navbar.Link isActive={router.pathname=='/ecommercev1/products'} href="/ecommercev1/products">Products</Navbar.Link>
        <Navbar.Link isActive={router.pathname == '/ecommercev1/about'} href="/ecommercev1/about">About</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@xs": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >
        <Navbar.Item
          css={{
            "@xsMax": {
              w: "100%",
              jc: "center",
            },
          }}
        >
          <Input
            clearable
            contentLeft={
              <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
            }
            contentLeftStyling={false}
            css={{
              w: "100%",
              "@xsMax": {
                mw: "300px",
              },
              "& .nextui-input-content--left": {
                h: "100%",
                ml: "$4",
                dflex: "center",
              },
            }}
            placeholder="Search..."
          />
        </Navbar.Item>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem
            key={item.title}
            activeColor="secondary"
            css={{
              color: index === collapseItems.length - 1 ? "$error" : "",
            }}
            isActive={router.pathname == item.href}
          >
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href={item.href}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
