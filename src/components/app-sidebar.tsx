"use client";

import {
  CreditCardIcon,
  FolderOpenIcon,
  HistoryIcon,
  KeyIcon,
  LogOutIcon,
  StarIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const menuItems = [
  {
    title: "Main",
    items: [
      {
        title: "Workflows",
        icon: FolderOpenIcon,
        href: "/workflows",
      },
      {
        title: "Credentials",
        icon: KeyIcon,
        href: "/credentials",
      },
      {
        title: "Executions",
        icon: HistoryIcon,
        href: "/executions",
      },
    ],
  },
];

const AppSidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="gap-x-4">
              <Link
                href={"/workflows"}
                className="w-full flex justify-center items-center"
              >
                <Image
                  src={"/images/logo.svg"}
                  alt="b8n"
                  width={30}
                  height={30}
                />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarHeader>
        <SidebarContent>
          {menuItems.map((group) => {
            return (
              <SidebarGroup key={group.title}>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          tooltip={item.title}
                          isActive={
                            item.href === "/"
                              ? pathName === "/"
                              : pathName.startsWith(item.href)
                          }
                          asChild
                          className="gap-x-4 h-10 px-4"
                        >
                          <Link href={item.href}>
                            <item.icon className="size-4" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            );
          })}
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={"Upgrade to pro"}
                className="gap-x-4 h-10 p-4"
                onClick={() => {}}
              >
                <StarIcon size={4} />
                <span>Upgrade to pro</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={"Billing portal"}
                className="gap-x-4 h-10 p-4"
                onClick={() => {}}
              >
                <CreditCardIcon size={4} />
                <span>Billing portal</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip={"Logout"}
                className="gap-x-4 h-10 p-4"
                onClick={() =>
                  authClient.signOut({
                    fetchOptions: {
                      onSuccess: () => {
                        router.push("/login");
                      },
                    },
                  })
                }
              >
                <LogOutIcon size={4} />
                <span>Logout</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
