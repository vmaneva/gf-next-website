import Link from "next/link";
import React from "react";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({ href, name }: NavLinkProps) => (
  <Link href={href} passHref>
    <a>{name}</a>
  </Link>
);

interface NavLinksState {
  isMenuOpen: boolean;
}

interface NavLinksProps {
  title: string;
  links: any[];
}

export class NavLinks extends React.Component<NavLinksProps, NavLinksState> {
  state: NavLinksState = { isMenuOpen: false };

  private triggerSubmenu = () => {
    const { isMenuOpen } = this.state;
    this.setState({ isMenuOpen: !isMenuOpen });
  };
  public render() {
    const { isMenuOpen } = this.state;
    const { title, links } = this.props;
    return (
      <div>
        <a onClick={this.triggerSubmenu}>{title}</a>
        {isMenuOpen && (
          <div className="nav-submenu">
            <ul className="nav-links--column">
              {links.map((link: NavLinkProps) => {
                return (
                  <li key={link.href}>
                    <NavLink href={link.href} name={link.name} />
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
