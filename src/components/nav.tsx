import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { ThemeSwitcher } from "./themeSwitcher";

function Nav( { onContactPress }: { onContactPress: () => void } ){
    return(
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">maxgr.dev</p>
        </NavbarBrand>
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#links">
              Links
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify="end">
          <NavbarItem>
            <ThemeSwitcher></ThemeSwitcher>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat" onClick={onContactPress}>
              Contact
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    )
}

export default Nav