import Footer from "@/components/footer";
import Header from "@/components/header";
import Providers from "@/lib/providers";
import {
  CheckIcon,
  CircleNotchIcon,
  InfoIcon,
  XIcon,
} from "@phosphor-icons/react";
import { TanstackDevtools } from "@tanstack/react-devtools";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Toaster, type ToasterProps } from "sonner";

const ThemedToaster = (props: ToasterProps) => {
  return (
    <Toaster
      containerAriaLabel="toast-notification"
      position="bottom-center"
      expand={false}
      visibleToasts={3}
      closeButton={false}
      offset={32}
      mobileOffset={24}
      gap={12}
      duration={4000}
      toastOptions={{
        style: {
          background: "hsl(from var(--card) h s l / 0.50)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          borderRadius: "var(--radius)",
          border: "1px solid hsl(from var(--border) h s l / 0.70)",
          paddingTop: "10px",
          paddingBottom: "12px",
          paddingLeft: "12px",
          paddingRight: "12px",
          fontSize: 18,
          fontFamily: "var(--font-instrument-serif)",
          fontWeight: "400",
          color: "var(--foreground)",
        },
      }}
      icons={{
        loading: (
          <div className="ml-1">
            <CircleNotchIcon
              size={13}
              weight="regular"
              className="animate-spin"
              color="var(--foreground)"
            />
          </div>
        ),
        success: (
          <div className="ml-1">
            <CheckIcon
              size={13}
              weight="regular"
              className="transition-all ease-in-out"
              color="var(--toast-success)"
            />
          </div>
        ),
        info: (
          <div className="ml-1">
            <InfoIcon
              size={13}
              weight="regular"
              className="transition-all ease-in-out"
              color="var(--foreground)"
            />
          </div>
        ),
        error: (
          <div className="ml-1">
            <XIcon
              size={13}
              weight="regular"
              className="transition-all ease-in-out"
              color="var(--destructive)"
            />
          </div>
        ),
      }}
      {...props}
    />
  );
};

export const Route = createRootRoute({
  component: () => (
    <Providers>
      <Header />
      <Outlet />
      <Footer />
      <ThemedToaster />
      <TanstackDevtools
        config={{
          position: "bottom-left",
          hideUntilHover: true,
        }}
        plugins={[
          {
            name: "Tanstack Router",
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </Providers>
  ),
});
